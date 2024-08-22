const express = require("express");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");
const protobuf = require("protobufjs");
const { body, validationResult } = require("express-validator");

const app = express();
app.use(express.urlencoded({ extended: true }));

const DATA_FILE = path.join(__dirname, "data.bin");

app.use(express.static(path.join(__dirname, "public")));

const root = protobuf.loadSync(path.join(__dirname, "link.proto"));
const Link = root.lookupType("Link");
const Links = root.lookupType("Links");

function loadData() {
  if (!fs.existsSync(DATA_FILE)) {
    return Links.create({ links: [] });
  }
  const data = fs.readFileSync(DATA_FILE);
  return Links.decode(data);
}

function saveData(data) {
  const buffer = Links.encode(data).finish();
  fs.writeFileSync(DATA_FILE, buffer);
}

app.post(
  "/api/create_link",
  [
    body("originalUrl").isURL().withMessage("Invalid URL"),
    body("duration").isInt({ min: 1 }).withMessage("Duration must be a positive integer"),
    body("visitorLimit").isInt({ min: 1 }).withMessage("Visitor limit must be a positive integer"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { originalUrl, duration, visitorLimit } = req.body;
    const id = uuidv4();
    const expirationTime = Date.now() + duration * 60 * 60 * 1000;
    const newLink = Link.create({
      id,
      original_url: originalUrl,
      expiration_time: expirationTime,
      visitor_limit: parseInt(visitorLimit, 10),
      visitor_count: 0,
    });

    const data = loadData();
    data.links.push(newLink);
    saveData(data);

    res.json({ short_url: `/api/r/${id}` });
  }
);

app.get("/api/r/:linkId", (req, res) => {
  const { linkId } = req.params;
  const data = loadData();
  const linkData = data.links.find(link => link.id === linkId);

  if (!linkData) {
    return res.status(404).send("Link not found");
  }

  if (
    Date.now() > linkData.expiration_time ||
    linkData.visitor_count >= linkData.visitor_limit
  ) {
    return res.send(`
      <html>
        <head>
          <title>Link Expired</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              background-color: #f4f4f4;
              margin: 0;
            }
            .container {
              background: white;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              text-align: center;
            }
            a {
              color: #28a745;
              text-decoration: none;
            }
            a:hover {
              text-decoration: underline;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Link Expired</h1>
            <p>This link has expired or reached its visitor limit.</p>
            <p><a href="/">Create your own smart link</a></p>
          </div>
        </body>
      </html>
    `);
  } else {
    linkData.visitor_count += 1;
    saveData(data);
    res.redirect(linkData.original_url);
  }
});

module.exports = app;
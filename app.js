const express = require("express");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");
const { body, validationResult } = require("express-validator");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const DATA_FILE = path.join(__dirname, "data.json");

app.use(express.static(path.join(__dirname, "public")));

function loadData() {
  if (!fs.existsSync(DATA_FILE)) {
    return { links: [] };
  }
  const data = fs.readFileSync(DATA_FILE);
  return JSON.parse(data);
}

function saveData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

app.post(
  "/api/create_link",
  [
    body("originalUrl").isURL().withMessage("Invalid URL"),
    body("duration").isInt({ min: 1 }).withMessage("Duration must be a positive integer"),
    body("visitorLimit").isInt({ min: 1 }).withMessage("Visitor limit must be a positive integer"),
  ],
  (req, res) => {
    console.log("Received request to create link:", req.body);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log("Validation errors:", errors.array());
      return res.status(400).json({ errors: errors.array() });
    }

    const { originalUrl, duration, visitorLimit } = req.body;
    const id = uuidv4();
    const expirationTime = Date.now() + duration * 60 * 60 * 1000;
    const newLink = {
      id,
      original_url: originalUrl,
      expiration_time: expirationTime,
      visitor_limit: parseInt(visitorLimit, 10),
      visitor_count: 0,
    };

    const data = loadData();
    data.links.push(newLink);
    saveData(data);

    console.log("Link created successfully:", newLink);
    res.json({ short_url: `/api/r/${id}` });
  }
);

app.get("/api/r/:linkId", (req, res) => {
  const { linkId } = req.params;
  console.log("Received request to retrieve link:", linkId);

  const data = loadData();
  console.log("Loaded data:", data);

  const linkData = data.links.find(link => link.id === linkId);
  console.log("Found link data:", linkData);

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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
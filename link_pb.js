/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Link = (function() {

    /**
     * Properties of a Link.
     * @exports ILink
     * @interface ILink
     * @property {string|null} [id] Link id
     * @property {string|null} [originalUrl] Link originalUrl
     * @property {number|Long|null} [expirationTime] Link expirationTime
     * @property {number|null} [visitorLimit] Link visitorLimit
     * @property {number|null} [visitorCount] Link visitorCount
     */

    /**
     * Constructs a new Link.
     * @exports Link
     * @classdesc Represents a Link.
     * @implements ILink
     * @constructor
     * @param {ILink=} [properties] Properties to set
     */
    function Link(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Link id.
     * @member {string} id
     * @memberof Link
     * @instance
     */
    Link.prototype.id = "";

    /**
     * Link originalUrl.
     * @member {string} originalUrl
     * @memberof Link
     * @instance
     */
    Link.prototype.originalUrl = "";

    /**
     * Link expirationTime.
     * @member {number|Long} expirationTime
     * @memberof Link
     * @instance
     */
    Link.prototype.expirationTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Link visitorLimit.
     * @member {number} visitorLimit
     * @memberof Link
     * @instance
     */
    Link.prototype.visitorLimit = 0;

    /**
     * Link visitorCount.
     * @member {number} visitorCount
     * @memberof Link
     * @instance
     */
    Link.prototype.visitorCount = 0;

    /**
     * Creates a new Link instance using the specified properties.
     * @function create
     * @memberof Link
     * @static
     * @param {ILink=} [properties] Properties to set
     * @returns {Link} Link instance
     */
    Link.create = function create(properties) {
        return new Link(properties);
    };

    /**
     * Encodes the specified Link message. Does not implicitly {@link Link.verify|verify} messages.
     * @function encode
     * @memberof Link
     * @static
     * @param {ILink} message Link message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Link.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.originalUrl != null && Object.hasOwnProperty.call(message, "originalUrl"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.originalUrl);
        if (message.expirationTime != null && Object.hasOwnProperty.call(message, "expirationTime"))
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.expirationTime);
        if (message.visitorLimit != null && Object.hasOwnProperty.call(message, "visitorLimit"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.visitorLimit);
        if (message.visitorCount != null && Object.hasOwnProperty.call(message, "visitorCount"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.visitorCount);
        return writer;
    };

    /**
     * Encodes the specified Link message, length delimited. Does not implicitly {@link Link.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Link
     * @static
     * @param {ILink} message Link message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Link.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Link message from the specified reader or buffer.
     * @function decode
     * @memberof Link
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Link} Link
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Link.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Link();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.string();
                    break;
                }
            case 2: {
                    message.originalUrl = reader.string();
                    break;
                }
            case 3: {
                    message.expirationTime = reader.int64();
                    break;
                }
            case 4: {
                    message.visitorLimit = reader.int32();
                    break;
                }
            case 5: {
                    message.visitorCount = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Link message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Link
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Link} Link
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Link.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Link message.
     * @function verify
     * @memberof Link
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Link.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.originalUrl != null && message.hasOwnProperty("originalUrl"))
            if (!$util.isString(message.originalUrl))
                return "originalUrl: string expected";
        if (message.expirationTime != null && message.hasOwnProperty("expirationTime"))
            if (!$util.isInteger(message.expirationTime) && !(message.expirationTime && $util.isInteger(message.expirationTime.low) && $util.isInteger(message.expirationTime.high)))
                return "expirationTime: integer|Long expected";
        if (message.visitorLimit != null && message.hasOwnProperty("visitorLimit"))
            if (!$util.isInteger(message.visitorLimit))
                return "visitorLimit: integer expected";
        if (message.visitorCount != null && message.hasOwnProperty("visitorCount"))
            if (!$util.isInteger(message.visitorCount))
                return "visitorCount: integer expected";
        return null;
    };

    /**
     * Creates a Link message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Link
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Link} Link
     */
    Link.fromObject = function fromObject(object) {
        if (object instanceof $root.Link)
            return object;
        var message = new $root.Link();
        if (object.id != null)
            message.id = String(object.id);
        if (object.originalUrl != null)
            message.originalUrl = String(object.originalUrl);
        if (object.expirationTime != null)
            if ($util.Long)
                (message.expirationTime = $util.Long.fromValue(object.expirationTime)).unsigned = false;
            else if (typeof object.expirationTime === "string")
                message.expirationTime = parseInt(object.expirationTime, 10);
            else if (typeof object.expirationTime === "number")
                message.expirationTime = object.expirationTime;
            else if (typeof object.expirationTime === "object")
                message.expirationTime = new $util.LongBits(object.expirationTime.low >>> 0, object.expirationTime.high >>> 0).toNumber();
        if (object.visitorLimit != null)
            message.visitorLimit = object.visitorLimit | 0;
        if (object.visitorCount != null)
            message.visitorCount = object.visitorCount | 0;
        return message;
    };

    /**
     * Creates a plain object from a Link message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Link
     * @static
     * @param {Link} message Link
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Link.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = "";
            object.originalUrl = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.expirationTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.expirationTime = options.longs === String ? "0" : 0;
            object.visitorLimit = 0;
            object.visitorCount = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.originalUrl != null && message.hasOwnProperty("originalUrl"))
            object.originalUrl = message.originalUrl;
        if (message.expirationTime != null && message.hasOwnProperty("expirationTime"))
            if (typeof message.expirationTime === "number")
                object.expirationTime = options.longs === String ? String(message.expirationTime) : message.expirationTime;
            else
                object.expirationTime = options.longs === String ? $util.Long.prototype.toString.call(message.expirationTime) : options.longs === Number ? new $util.LongBits(message.expirationTime.low >>> 0, message.expirationTime.high >>> 0).toNumber() : message.expirationTime;
        if (message.visitorLimit != null && message.hasOwnProperty("visitorLimit"))
            object.visitorLimit = message.visitorLimit;
        if (message.visitorCount != null && message.hasOwnProperty("visitorCount"))
            object.visitorCount = message.visitorCount;
        return object;
    };

    /**
     * Converts this Link to JSON.
     * @function toJSON
     * @memberof Link
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Link.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Link
     * @function getTypeUrl
     * @memberof Link
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Link.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Link";
    };

    return Link;
})();

$root.Links = (function() {

    /**
     * Properties of a Links.
     * @exports ILinks
     * @interface ILinks
     * @property {Array.<ILink>|null} [links] Links links
     */

    /**
     * Constructs a new Links.
     * @exports Links
     * @classdesc Represents a Links.
     * @implements ILinks
     * @constructor
     * @param {ILinks=} [properties] Properties to set
     */
    function Links(properties) {
        this.links = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Links links.
     * @member {Array.<ILink>} links
     * @memberof Links
     * @instance
     */
    Links.prototype.links = $util.emptyArray;

    /**
     * Creates a new Links instance using the specified properties.
     * @function create
     * @memberof Links
     * @static
     * @param {ILinks=} [properties] Properties to set
     * @returns {Links} Links instance
     */
    Links.create = function create(properties) {
        return new Links(properties);
    };

    /**
     * Encodes the specified Links message. Does not implicitly {@link Links.verify|verify} messages.
     * @function encode
     * @memberof Links
     * @static
     * @param {ILinks} message Links message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Links.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.links != null && message.links.length)
            for (var i = 0; i < message.links.length; ++i)
                $root.Link.encode(message.links[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Links message, length delimited. Does not implicitly {@link Links.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Links
     * @static
     * @param {ILinks} message Links message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Links.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Links message from the specified reader or buffer.
     * @function decode
     * @memberof Links
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Links} Links
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Links.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Links();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.links && message.links.length))
                        message.links = [];
                    message.links.push($root.Link.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Links message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Links
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Links} Links
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Links.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Links message.
     * @function verify
     * @memberof Links
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Links.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.links != null && message.hasOwnProperty("links")) {
            if (!Array.isArray(message.links))
                return "links: array expected";
            for (var i = 0; i < message.links.length; ++i) {
                var error = $root.Link.verify(message.links[i]);
                if (error)
                    return "links." + error;
            }
        }
        return null;
    };

    /**
     * Creates a Links message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Links
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Links} Links
     */
    Links.fromObject = function fromObject(object) {
        if (object instanceof $root.Links)
            return object;
        var message = new $root.Links();
        if (object.links) {
            if (!Array.isArray(object.links))
                throw TypeError(".Links.links: array expected");
            message.links = [];
            for (var i = 0; i < object.links.length; ++i) {
                if (typeof object.links[i] !== "object")
                    throw TypeError(".Links.links: object expected");
                message.links[i] = $root.Link.fromObject(object.links[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a Links message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Links
     * @static
     * @param {Links} message Links
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Links.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.links = [];
        if (message.links && message.links.length) {
            object.links = [];
            for (var j = 0; j < message.links.length; ++j)
                object.links[j] = $root.Link.toObject(message.links[j], options);
        }
        return object;
    };

    /**
     * Converts this Links to JSON.
     * @function toJSON
     * @memberof Links
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Links.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Links
     * @function getTypeUrl
     * @memberof Links
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Links.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Links";
    };

    return Links;
})();

module.exports = $root;

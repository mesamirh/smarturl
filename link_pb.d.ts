import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of a Link. */
export interface ILink {

    /** Link id */
    id?: (string|null);

    /** Link originalUrl */
    originalUrl?: (string|null);

    /** Link expirationTime */
    expirationTime?: (number|Long|null);

    /** Link visitorLimit */
    visitorLimit?: (number|null);

    /** Link visitorCount */
    visitorCount?: (number|null);
}

/** Represents a Link. */
export class Link implements ILink {

    /**
     * Constructs a new Link.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILink);

    /** Link id. */
    public id: string;

    /** Link originalUrl. */
    public originalUrl: string;

    /** Link expirationTime. */
    public expirationTime: (number|Long);

    /** Link visitorLimit. */
    public visitorLimit: number;

    /** Link visitorCount. */
    public visitorCount: number;

    /**
     * Creates a new Link instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Link instance
     */
    public static create(properties?: ILink): Link;

    /**
     * Encodes the specified Link message. Does not implicitly {@link Link.verify|verify} messages.
     * @param message Link message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILink, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Link message, length delimited. Does not implicitly {@link Link.verify|verify} messages.
     * @param message Link message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILink, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Link message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Link
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Link;

    /**
     * Decodes a Link message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Link
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Link;

    /**
     * Verifies a Link message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Link message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Link
     */
    public static fromObject(object: { [k: string]: any }): Link;

    /**
     * Creates a plain object from a Link message. Also converts values to other types if specified.
     * @param message Link
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Link, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Link to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Link
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a Links. */
export interface ILinks {

    /** Links links */
    links?: (ILink[]|null);
}

/** Represents a Links. */
export class Links implements ILinks {

    /**
     * Constructs a new Links.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILinks);

    /** Links links. */
    public links: ILink[];

    /**
     * Creates a new Links instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Links instance
     */
    public static create(properties?: ILinks): Links;

    /**
     * Encodes the specified Links message. Does not implicitly {@link Links.verify|verify} messages.
     * @param message Links message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILinks, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Links message, length delimited. Does not implicitly {@link Links.verify|verify} messages.
     * @param message Links message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILinks, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Links message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Links
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Links;

    /**
     * Decodes a Links message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Links
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Links;

    /**
     * Verifies a Links message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Links message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Links
     */
    public static fromObject(object: { [k: string]: any }): Links;

    /**
     * Creates a plain object from a Links message. Also converts values to other types if specified.
     * @param message Links
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Links, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Links to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Links
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

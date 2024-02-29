/**
 * This file was auto-generated by Fern from our API Definition.
 */
/**
 * The payload of data sent from Webflow
 */
export interface SitePublishPayload {
    /** The site id that was published */
    site?: string;
    /** The timestamp of the publish event */
    publishTime?: Date;
    /** The domains that were published */
    domains?: string[];
    /** The name and id of the user who published the site */
    publishedBy?: Record<string, unknown>;
}

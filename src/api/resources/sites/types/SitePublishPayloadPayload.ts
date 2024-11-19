/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The payload of data sent from Webflow
 */
export interface SitePublishPayloadPayload {
    /** The ID of the site that was published */
    siteId?: string;
    /** The timestamp of the publish event */
    publishedOn?: Date;
    /** The domains that were published */
    domains?: string[];
    /** The name andID of the user who published the site */
    publishedBy?: Record<string, unknown>;
}

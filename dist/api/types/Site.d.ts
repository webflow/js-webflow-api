/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as Webflow from "..";
export interface Site {
    /** Unique identifier for the Site */
    id: string;
    /** Unique identifier for the Workspace */
    workspaceId?: string;
    /** Date the Site was created */
    createdOn?: Date;
    /** Name given to Site */
    displayName?: string;
    /** Slugified version of name */
    shortName?: string;
    /** Date the Site was last published */
    lastPublished?: Date;
    /** Date the Site was last updated */
    lastUpdated?: Date;
    /** URL of a generated image for the given Site */
    previewUrl?: string;
    /** Site timezone set under Site Settings */
    timeZone?: string;
    customDomains?: Webflow.Domain[];
}

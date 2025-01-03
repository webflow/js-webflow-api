/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         name: "The Hitchhiker's Guide to the Galaxy"
 *     }
 */
export interface SitesCreateRequest {
    /** The name of the site */
    name: string;
    /** The workspace or marketplace template to use */
    templateName?: string;
    /** MegaDodo Publications - Potential Book Ideas */
    parentFolderId?: string;
}

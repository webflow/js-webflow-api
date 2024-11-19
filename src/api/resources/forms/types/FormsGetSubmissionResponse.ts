/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * A form submission
 */
export interface FormsGetSubmissionResponse {
    /** The unique ID of the Form submission */
    id?: string;
    /** The Form name displayed on the site */
    displayName?: string;
    /** The unique ID of the Site the Form belongs to */
    siteId?: string;
    /** The unique ID of the Workspace the Site belongs to */
    workspaceId?: string;
    /** Date that the Form was submitted on */
    dateSubmitted?: Date;
    /** The data submitted in the Form */
    formResponse?: Record<string, unknown>;
}

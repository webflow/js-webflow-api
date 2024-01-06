/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface FormResponseSettings {
    /** Whether to send an email confirmation to the user */
    sendEmailConfirmation?: boolean;
    /** The url or path to redirect the user to after form submission */
    redirectUrl?: string;
    /** The HTTP request method to use for the redirectUrl (eg. POST or GET) */
    redirectMethod?: string;
    /** The action to take after form submission */
    redirectAction?: string;
}
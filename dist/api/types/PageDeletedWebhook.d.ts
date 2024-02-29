/**
 * This file was auto-generated by Fern from our API Definition.
 */
/**
 * The Webhook payload for when a Page is deleted
 */
export interface PageDeletedWebhook {
    siteId?: string;
    pageId?: string;
    pageTitle?: string;
    deletedAt?: Date;
}

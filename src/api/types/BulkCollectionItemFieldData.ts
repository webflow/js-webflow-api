/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface BulkCollectionItemFieldData {
    /** Name of the Item */
    name?: string;
    /** URL structure of the Item in your site. Note: Updates to an item slug will break all links referencing the old slug. */
    slug?: string;
    /** Accepts any additional properties */
    [key: string]: any;
}

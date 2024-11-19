/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Webflow from "../../../index";

/**
 * The details of a field in a collection
 */
export interface CollectionsGetResponseFieldsItem {
    /** Unique identifier for a Field */
    id: string;
    /** define whether a field is required in a collection */
    isRequired: boolean;
    /** Define whether the field is editable */
    isEditable?: boolean;
    /** Choose these appropriate field type for your collection data */
    type: Webflow.CollectionsGetResponseFieldsItemType;
    /** Slug of Field in Site URL structure. Slugs should be all lowercase with no spaces. Any spaces will be converted to "-." */
    slug?: string;
    /** The name of a field */
    displayName: string;
    /** Additional text to help anyone filling out this field */
    helpText?: string;
}

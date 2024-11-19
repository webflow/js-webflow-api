/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Webflow from "../../../../../index";

/**
 * The fields that define the schema for a given Item are based on the Collection that Item belongs to. Beyond the user defined fields, there are a handful of additional fields that are automatically created for all items
 */
export interface ItemsCreateItemLiveRequestCmsLocaleId {
    /** Identifier for the locale of the CMS item */
    cmsLocaleId?: string;
    /** Boolean determining if the Item is set to archived */
    isArchived?: boolean;
    /** Boolean determining if the Item is set to draft */
    isDraft?: boolean;
    fieldData?: Webflow.collections.ItemsCreateItemLiveRequestCmsLocaleIdFieldData;
}

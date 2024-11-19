/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Webflow from "../../../../../../index";

/**
 * @example
 *     {
 *         cmsLocaleIds: ["66f6e966c9e1dc700a857ca3", "66f6e966c9e1dc700a857ca4", "66f6e966c9e1dc700a857ca5"],
 *         isArchived: false,
 *         isDraft: false,
 *         fieldData: {
 *             name: "Don\u2019t Panic",
 *             slug: "dont-panic"
 *         }
 *     }
 *
 * @example
 *     {
 *         cmsLocaleIds: ["66f6e966c9e1dc700a857ca3", "66f6e966c9e1dc700a857ca4"],
 *         isArchived: false,
 *         isDraft: false,
 *         fieldData: [{
 *                 name: "Don\u2019t Panic",
 *                 slug: "dont-panic"
 *             }, {
 *                 name: "So Long and Thanks for All the Fish",
 *                 slug: "so-long-and-thanks"
 *             }]
 *     }
 *
 * @example
 *     {
 *         cmsLocaleIds: ["66f6e966c9e1dc700a857ca3", "66f6e966c9e1dc700a857ca4", "66f6e966c9e1dc700a857ca5"],
 *         isArchived: false,
 *         isDraft: false,
 *         fieldData: {
 *             name: "Don\u2019t Panic",
 *             slug: "dont-panic"
 *         }
 *     }
 *
 * @example
 *     {
 *         cmsLocaleIds: ["66f6e966c9e1dc700a857ca3", "66f6e966c9e1dc700a857ca4", "66f6e966c9e1dc700a857ca5"],
 *         isArchived: false,
 *         isDraft: false,
 *         fieldData: {
 *             name: "Don\u2019t Panic",
 *             slug: "dont-panic"
 *         }
 *     }
 */
export interface ItemsCreateItemsRequest {
    /** Array of identifiers for the locales where the item will be created */
    cmsLocaleIds?: string[];
    /** Indicates whether the item is archived. */
    isArchived?: boolean;
    /** Indicates whether the item is in draft state. */
    isDraft?: boolean;
    fieldData?: Webflow.collections.ItemsCreateItemsRequestFieldData;
}

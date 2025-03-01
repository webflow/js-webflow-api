/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Webflow from "../index";

/**
 * A specific instance of Custom Code applied to a Site or Page
 */
export interface CustomCodeBlock {
    /** The Site ID where the custom code was applied */
    siteId?: string;
    /** The Page ID (if applied at Page-level) */
    pageId?: string;
    /** Whether the Custom Code script is applied at the Site-level or Page-level */
    type?: Webflow.CustomCodeBlockType;
    scripts?: Webflow.Scripts;
    /** The date the Block was created */
    createdOn?: Date;
    /** The date the Block was most recently updated */
    lastUpdated?: Date;
}

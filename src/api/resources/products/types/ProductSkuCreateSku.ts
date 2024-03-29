/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Webflow from "../../..";

/**
 * The SKU object
 */
export interface ProductSkuCreateSku {
    /** Unique identifier for the Product */
    id?: string;
    /** The date the Product was last published */
    lastPublished?: Date;
    /** The date the Product was last updated */
    lastUpdated?: Date;
    /** The date the Product was created */
    createdOn?: Date;
    /** Standard and Custom fields for a SKU */
    fieldData?: Webflow.ProductSkuCreateSkuFieldData;
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Webflow from "../../../index";

/**
 * The Product object
 */
export interface ProductsGetResponseProduct {
    /** Unique identifier for the Product */
    id?: string;
    /** Identifier for the locale of the CMS item */
    cmsLocaleId?: string;
    /** The date the Product was last published */
    lastPublished?: Date;
    /** The date the Product was last updated */
    lastUpdated?: Date;
    /** The date the Product was created */
    createdOn?: Date;
    /** Boolean determining if the Product is set to archived */
    isArchived?: boolean;
    /** Boolean determining if the Product is set to draft */
    isDraft?: boolean;
    /** Contains content-specific details for a product, covering both standard (e.g., title, description) and custom fields tailored to the product setup. */
    fieldData?: Webflow.ProductsGetResponseProductFieldData;
}

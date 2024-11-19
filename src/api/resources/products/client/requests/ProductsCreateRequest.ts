/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Webflow from "../../../../index";

/**
 * @example
 *     {}
 */
export interface ProductsCreateRequest {
    /** Indicate whether your Product should be set as "staging" or "live" */
    publishStatus?: Webflow.ProductsCreateRequestPublishStatus;
    /** The Product object */
    product?: Webflow.ProductsCreateRequestProduct;
    /** The SKU object */
    sku?: Webflow.ProductsCreateRequestSku;
}

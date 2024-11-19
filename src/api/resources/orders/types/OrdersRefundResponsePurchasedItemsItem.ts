/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Webflow from "../../../index";

/**
 * An Item that was purchased
 */
export interface OrdersRefundResponsePurchasedItemsItem {
    /** Number of Item purchased. */
    count?: number;
    /** The total for the row */
    rowTotal?: Webflow.OrdersRefundResponsePurchasedItemsItemRowTotal;
    /** The unique identifier for the Product */
    productId?: string;
    /** User-facing name of the Product */
    productName?: string;
    /** Slug for the Product */
    productSlug?: string;
    /** Identifier for the Product Variant (SKU) */
    variantId?: string;
    /** User-facing name of the Product Variant (SKU) */
    variantName?: string;
    /** Slug for the Product Variant (SKU) */
    variantSlug?: string;
    /** The user-defined custom SKU of the Product Variant (SKU) */
    variantSku?: string;
    variantImage?: Webflow.OrdersRefundResponsePurchasedItemsItemVariantImage;
    /** The price corresponding to the variant */
    variantPrice?: Webflow.OrdersRefundResponsePurchasedItemsItemVariantPrice;
    /** The physical weight of the variant if provided, or null */
    weight?: number;
    /** The physical width of the variant if provided, or null */
    width?: number;
    /** The physical height of the variant if provided, or null */
    height?: number;
    /** The physical length of the variant if provided, or null */
    length?: number;
}

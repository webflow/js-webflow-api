/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Webflow from "../../../index";

/**
 * Standard and Custom fields for a SKU
 */
export interface ProductsCreateResponseSkusItemFieldData {
    /** A dictionary that maps a SKU property to a SKU value. The key of the dictionary is the SKU property ID, and the value is the SKU value ID. */
    skuValues?: Record<string, string>;
    /** Name of the Product */
    name: string;
    /** URL structure of the Product in your site. */
    slug: string;
    /** price of SKU */
    price: Webflow.ProductsCreateResponseSkusItemFieldDataPrice;
    /** comparison price of SKU */
    compareAtPrice?: Webflow.ProductsCreateResponseSkusItemFieldDataCompareAtPrice;
    ecSkuBillingMethod?: Webflow.ProductsCreateResponseSkusItemFieldDataEcSkuBillingMethod;
    ecSkuSubscriptionPlan?: Webflow.ProductsCreateResponseSkusItemFieldDataEcSkuSubscriptionPlan;
    /** A boolean indicating whether inventory for this product should be tracked. */
    trackInventory?: boolean;
    /** Quantity of SKU that will be tracked as items are ordered. */
    quantity?: number;
}

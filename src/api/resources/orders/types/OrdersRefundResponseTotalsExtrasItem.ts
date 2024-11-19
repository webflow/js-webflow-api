/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Webflow from "../../../index";

/**
 * Extra order items, includes discounts, shipping, and taxes.
 */
export interface OrdersRefundResponseTotalsExtrasItem {
    /** The type of extra item this is. */
    type?: Webflow.OrdersRefundResponseTotalsExtrasItemType;
    /** A human-readable (but English) name for this extra charge. */
    name?: string;
    /** A human-readable (but English) description of this extra charge. */
    description?: string;
    /** The price for the item */
    price?: Webflow.OrdersRefundResponseTotalsExtrasItemPrice;
}

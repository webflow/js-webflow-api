/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The type of the order address (billing or shipping)
 */
export type OrdersRefundResponseAllAddressesItemType = "shipping" | "billing";

export const OrdersRefundResponseAllAddressesItemType = {
    Shipping: "shipping",
    Billing: "billing",
} as const;

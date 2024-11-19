/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The type of the order address (billing or shipping)
 */
export type EcommNewOrderPayloadShippingAddressType = "shipping" | "billing";

export const EcommNewOrderPayloadShippingAddressType = {
    Shipping: "shipping",
    Billing: "billing",
} as const;

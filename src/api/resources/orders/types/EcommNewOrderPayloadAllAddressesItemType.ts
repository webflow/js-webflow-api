/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The type of the order address (billing or shipping)
 */
export type EcommNewOrderPayloadAllAddressesItemType = "shipping" | "billing";

export const EcommNewOrderPayloadAllAddressesItemType = {
    Shipping: "shipping",
    Billing: "billing",
} as const;

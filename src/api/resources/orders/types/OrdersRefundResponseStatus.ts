/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The status of the Order
 */
export type OrdersRefundResponseStatus =
    | "pending"
    | "unfulfilled"
    | "fulfilled"
    | "disputed"
    | "dispute-lost"
    | "refunded";

export const OrdersRefundResponseStatus = {
    Pending: "pending",
    Unfulfilled: "unfulfilled",
    Fulfilled: "fulfilled",
    Disputed: "disputed",
    DisputeLost: "dispute-lost",
    Refunded: "refunded",
} as const;

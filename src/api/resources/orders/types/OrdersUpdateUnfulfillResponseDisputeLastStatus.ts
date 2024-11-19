/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * If an order was disputed by the customer, then this key will be set with the [dispute's status](https://stripe.com/docs/api#dispute_object-status).
 */
export type OrdersUpdateUnfulfillResponseDisputeLastStatus =
    | "warning_needs_response"
    | "warning_under_review"
    | "warning_closed"
    | "needs_response"
    | "under_review"
    | "charge_refunded"
    | "won"
    | "lost";

export const OrdersUpdateUnfulfillResponseDisputeLastStatus = {
    WarningNeedsResponse: "warning_needs_response",
    WarningUnderReview: "warning_under_review",
    WarningClosed: "warning_closed",
    NeedsResponse: "needs_response",
    UnderReview: "under_review",
    ChargeRefunded: "charge_refunded",
    Won: "won",
    Lost: "lost",
} as const;

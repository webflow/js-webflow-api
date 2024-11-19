/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface OrdersUpdateResponsePaypalDetails {
    /** PayPal order identifier */
    orderId?: string;
    /** PayPal payer identifier */
    payerId?: string;
    /** PayPal capture identifier */
    captureId?: string;
    /** PayPal refund identifier */
    refundId?: string;
    /** PayPal-issued reason for the refund */
    refundReason?: string;
    /** PayPal dispute identifier */
    disputeId?: string;
}

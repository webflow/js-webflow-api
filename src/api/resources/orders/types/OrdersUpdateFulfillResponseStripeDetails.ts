/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * An object with various Stripe IDs, useful for linking into the stripe dashboard.
 */
export interface OrdersUpdateFulfillResponseStripeDetails {
    /** Stripe-generated identifier for the Subscription */
    subscriptionId?: string;
    /** Stripe-generated identifier for the PaymentMethod used */
    paymentMethod?: string;
    /** Stripe-generated identifier for the PaymentIntent, or null */
    paymentIntentId?: string;
    /** Stripe-generated customer identifier, or null */
    customerId?: string;
    /** Stripe-generated charge identifier, or null */
    chargeId?: string;
    /** Stripe-generated dispute identifier, or null */
    disputeId?: string;
    /** Stripe-generated refund identifier, or null */
    refundId?: string;
    /** Stripe-generated refund reason, or null */
    refundReason?: string;
}

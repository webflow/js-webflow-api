/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Webflow from "../../../index";

export interface OrdersRefundResponse {
    /**
     * The order ID. Will usually be 6 hex characters, but can also be 9
     * hex characters if the site has a very large number of Orders.
     * Randomly assigned.
     */
    orderId?: string;
    /** The status of the Order */
    status?: Webflow.OrdersRefundResponseStatus;
    /** A comment string for this Order, which is editable by API user (not used by Webflow). */
    comment?: string;
    /** A comment that the customer left when making their Order */
    orderComment?: string;
    /** The ISO8601 timestamp that an Order was placed. */
    acceptedOn?: Date;
    /** When an Order is marked as 'fulfilled', this field represents the timestamp of the fulfillment in ISO8601 format. Otherwise, it is null. */
    fulfilledOn?: Date;
    /** When an Order is marked as 'refunded', this field represents the timestamp of the fulfillment in ISO8601 format. Otherwise, it is null. */
    refundedOn?: Date;
    /** When an Order is marked as 'disputed', this field represents the timestamp of the fulfillment in ISO8601 format. Otherwise, it is null. */
    disputedOn?: Date;
    /** If an Order has been disputed by the customer, this key will be set to the ISO8601 timestamp of the last update received. If the Order is not disputed, the key will be null. */
    disputeUpdatedOn?: Date;
    /** If an order was disputed by the customer, then this key will be set with the [dispute's status](https://stripe.com/docs/api#dispute_object-status). */
    disputeLastStatus?: Webflow.OrdersRefundResponseDisputeLastStatus;
    /** The total paid by the customer */
    customerPaid?: Webflow.OrdersRefundResponseCustomerPaid;
    /** The net amount after application fees */
    netAmount?: Webflow.OrdersRefundResponseNetAmount;
    /** The application fee assessed by the platform */
    applicationFee?: Webflow.OrdersRefundResponseApplicationFee;
    /** All addresses provided by the customer during the ordering flow. */
    allAddresses?: Webflow.OrdersRefundResponseAllAddressesItem[];
    /** The shipping address */
    shippingAddress?: Webflow.OrdersRefundResponseShippingAddress;
    /** The billing address */
    billingAddress?: Webflow.OrdersRefundResponseBillingAddress;
    /** A string editable by the API user to note the shipping provider used (not used by Webflow). */
    shippingProvider?: string;
    /** A string editable by the API user to note the shipping tracking number for the order (not used by Webflow). */
    shippingTracking?: string;
    shippingTrackingUrl?: string;
    /** An object with the keys `fullName` and `email`. */
    customerInfo?: Webflow.OrdersRefundResponseCustomerInfo;
    /** An array of all things that the Customer purchased. */
    purchasedItems?: Webflow.OrdersRefundResponsePurchasedItemsItem[];
    /** The sum of all 'count' fields in 'purchasedItems'. */
    purchasedItemsCount?: number;
    /** An object with various Stripe IDs, useful for linking into the stripe dashboard. */
    stripeDetails?: Webflow.OrdersRefundResponseStripeDetails;
    /** Details on the card used to fulfill this order, if this order was finalized with Stripe. */
    stripeCard?: Webflow.OrdersRefundResponseStripeCard;
    paypalDetails?: Webflow.OrdersRefundResponsePaypalDetails;
    /** An array of additional inputs for custom order data gathering. Each object in the array represents an input with a name, and a textInput, textArea, or checkbox value. */
    customData?: Record<string, unknown>[];
    metadata?: Webflow.OrdersRefundResponseMetadata;
    /** A boolean indicating whether the customer has been deleted from the site. */
    isCustomerDeleted?: boolean;
    /** A boolean indicating whether the order contains one or more purchased items that require shipping. */
    isShippingRequired?: boolean;
    /** A boolean indicating whether the order contains one or more purchased items that are downloadable. */
    hasDownloads?: boolean;
    /** A string indicating the payment processor used for this order. */
    paymentProcessor?: string;
    /** An object describing various pricing totals */
    totals?: Webflow.OrdersRefundResponseTotals;
    /** An array of downloadable file objects. */
    downloadFiles?: Webflow.OrdersRefundResponseDownloadFilesItem[];
}

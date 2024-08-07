/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Webflow from "../index";

/**
 * Details on the card used to fulfill this order, if this order was finalized with Stripe.
 */
export interface StripeCard {
    /** The last 4 digits on the card as a string */
    last4?: string;
    /** The card's brand (ie. credit card network) */
    brand?: Webflow.StripeCardBrand;
    /** The name on the card. */
    ownerName?: string;
    /** The card's expiration date. */
    expires?: Webflow.StripeCardExpires;
}

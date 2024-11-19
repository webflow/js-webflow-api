/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Webflow from "../../../index";

/**
 * The shipping address
 */
export interface OrdersUpdateResponseShippingAddress {
    /** The type of the order address (billing or shipping) */
    type?: Webflow.OrdersUpdateResponseShippingAddressType;
    /** Represents a Japan-only address format. This field will only appear on orders placed from Japan. */
    japanType?: Webflow.OrdersUpdateResponseShippingAddressJapanType;
    /** Display name on the address */
    addressee?: string;
    /** The first line of the address */
    line1?: string;
    /** The second line of the address */
    line2?: string;
    /** The city of the address. */
    city?: string;
    /** The state or province of the address */
    state?: string;
    /** The country of the address */
    country?: string;
    /** The postal code of the address */
    postalCode?: string;
}

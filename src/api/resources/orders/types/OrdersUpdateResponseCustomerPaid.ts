/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The total paid by the customer
 */
export interface OrdersUpdateResponseCustomerPaid {
    /** The three-letter ISO currency code */
    unit?: string;
    /** The numeric value in the base unit of the currency */
    value?: string;
    /** The user-facing string representation of the amount */
    string?: string;
}

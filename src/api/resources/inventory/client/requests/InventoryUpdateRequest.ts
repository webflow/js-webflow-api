/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Webflow from "../../../../index";

/**
 * @example
 *     {
 *         inventoryType: "infinite"
 *     }
 */
export interface InventoryUpdateRequest {
    /** infinite or finite */
    inventoryType: Webflow.InventoryUpdateRequestInventoryType;
    /** Adds this quantity to currently store quantity. Can be negative. */
    updateQuantity?: number;
    /** Immediately sets quantity to this value. */
    quantity?: number;
}

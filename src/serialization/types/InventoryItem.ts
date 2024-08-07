/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Webflow from "../../api/index";
import * as core from "../../core";
import { InventoryItemInventoryType } from "./InventoryItemInventoryType";

export const InventoryItem: core.serialization.ObjectSchema<serializers.InventoryItem.Raw, Webflow.InventoryItem> =
    core.serialization.object({
        id: core.serialization.string().optional(),
        quantity: core.serialization.number().optional(),
        inventoryType: InventoryItemInventoryType.optional(),
    });

export declare namespace InventoryItem {
    interface Raw {
        id?: string | null;
        quantity?: number | null;
        inventoryType?: InventoryItemInventoryType.Raw | null;
    }
}

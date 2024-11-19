/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Webflow from "../../../../api/index";
import * as core from "../../../../core";

export const InventoryListResponseInventoryType: core.serialization.Schema<
    serializers.InventoryListResponseInventoryType.Raw,
    Webflow.InventoryListResponseInventoryType
> = core.serialization.enum_(["infinite", "finite"]);

export declare namespace InventoryListResponseInventoryType {
    type Raw = "infinite" | "finite";
}

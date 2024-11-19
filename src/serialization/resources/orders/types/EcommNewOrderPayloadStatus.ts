/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Webflow from "../../../../api/index";
import * as core from "../../../../core";

export const EcommNewOrderPayloadStatus: core.serialization.Schema<
    serializers.EcommNewOrderPayloadStatus.Raw,
    Webflow.EcommNewOrderPayloadStatus
> = core.serialization.enum_(["pending", "unfulfilled", "fulfilled", "disputed", "dispute-lost", "refunded"]);

export declare namespace EcommNewOrderPayloadStatus {
    type Raw = "pending" | "unfulfilled" | "fulfilled" | "disputed" | "dispute-lost" | "refunded";
}

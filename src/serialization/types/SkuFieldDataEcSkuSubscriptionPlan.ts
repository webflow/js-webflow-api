/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Webflow from "../../api/index";
import * as core from "../../core";
import { SkuFieldDataEcSkuSubscriptionPlanInterval } from "./SkuFieldDataEcSkuSubscriptionPlanInterval";
import { SkuFieldDataEcSkuSubscriptionPlanPlansItem } from "./SkuFieldDataEcSkuSubscriptionPlanPlansItem";

export const SkuFieldDataEcSkuSubscriptionPlan: core.serialization.ObjectSchema<
    serializers.SkuFieldDataEcSkuSubscriptionPlan.Raw,
    Webflow.SkuFieldDataEcSkuSubscriptionPlan
> = core.serialization.object({
    interval: SkuFieldDataEcSkuSubscriptionPlanInterval.optional(),
    frequency: core.serialization.number().optional(),
    trial: core.serialization.number().optional(),
    plans: core.serialization.list(SkuFieldDataEcSkuSubscriptionPlanPlansItem).optional(),
});

export declare namespace SkuFieldDataEcSkuSubscriptionPlan {
    interface Raw {
        interval?: SkuFieldDataEcSkuSubscriptionPlanInterval.Raw | null;
        frequency?: number | null;
        trial?: number | null;
        plans?: SkuFieldDataEcSkuSubscriptionPlanPlansItem.Raw[] | null;
    }
}

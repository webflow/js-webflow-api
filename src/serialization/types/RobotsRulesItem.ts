/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Webflow from "../../api/index";
import * as core from "../../core";

export const RobotsRulesItem: core.serialization.ObjectSchema<
    serializers.RobotsRulesItem.Raw,
    Webflow.RobotsRulesItem
> = core.serialization.object({
    userAgent: core.serialization.string(),
    allows: core.serialization.list(core.serialization.string()).optional(),
    disallows: core.serialization.list(core.serialization.string()).optional(),
});

export declare namespace RobotsRulesItem {
    interface Raw {
        userAgent: string;
        allows?: string[] | null;
        disallows?: string[] | null;
    }
}

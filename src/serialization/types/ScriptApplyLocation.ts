/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Webflow from "../../api";
import * as core from "../../core";

export const ScriptApplyLocation: core.serialization.Schema<
    serializers.ScriptApplyLocation.Raw,
    Webflow.ScriptApplyLocation
> = core.serialization.enum_(["header", "footer"]);

export declare namespace ScriptApplyLocation {
    type Raw = "header" | "footer";
}

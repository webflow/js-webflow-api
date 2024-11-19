/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Webflow from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const ScriptsUpsertCustomCodeRequestScriptsItemLocation: core.serialization.Schema<
    serializers.sites.ScriptsUpsertCustomCodeRequestScriptsItemLocation.Raw,
    Webflow.sites.ScriptsUpsertCustomCodeRequestScriptsItemLocation
> = core.serialization.enum_(["header", "footer"]);

export declare namespace ScriptsUpsertCustomCodeRequestScriptsItemLocation {
    type Raw = "header" | "footer";
}

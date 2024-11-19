/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Webflow from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const ScriptsListCustomCodeBlocksResponseBlocksItemScriptsItemLocation: core.serialization.Schema<
    serializers.sites.ScriptsListCustomCodeBlocksResponseBlocksItemScriptsItemLocation.Raw,
    Webflow.sites.ScriptsListCustomCodeBlocksResponseBlocksItemScriptsItemLocation
> = core.serialization.enum_(["header", "footer"]);

export declare namespace ScriptsListCustomCodeBlocksResponseBlocksItemScriptsItemLocation {
    type Raw = "header" | "footer";
}

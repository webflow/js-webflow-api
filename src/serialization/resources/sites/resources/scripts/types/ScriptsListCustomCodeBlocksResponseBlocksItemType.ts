/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Webflow from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const ScriptsListCustomCodeBlocksResponseBlocksItemType: core.serialization.Schema<
    serializers.sites.ScriptsListCustomCodeBlocksResponseBlocksItemType.Raw,
    Webflow.sites.ScriptsListCustomCodeBlocksResponseBlocksItemType
> = core.serialization.enum_(["page", "site"]);

export declare namespace ScriptsListCustomCodeBlocksResponseBlocksItemType {
    type Raw = "page" | "site";
}

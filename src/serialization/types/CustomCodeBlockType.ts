/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Webflow from "../../api";
import * as core from "../../core";

export const CustomCodeBlockType: core.serialization.Schema<
    serializers.CustomCodeBlockType.Raw,
    Webflow.CustomCodeBlockType
> = core.serialization.enum_(["page", "site"]);

export declare namespace CustomCodeBlockType {
    type Raw = "page" | "site";
}

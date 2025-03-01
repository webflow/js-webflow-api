/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Webflow from "../../api/index";
import * as core from "../../core";

export const SiteDataCollectionType: core.serialization.Schema<
    serializers.SiteDataCollectionType.Raw,
    Webflow.SiteDataCollectionType
> = core.serialization.enum_(["always", "optOut", "disabled"]);

export declare namespace SiteDataCollectionType {
    type Raw = "always" | "optOut" | "disabled";
}

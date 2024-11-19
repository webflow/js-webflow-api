/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Webflow from "../../api/index";
import * as core from "../../core";

export const ConflictErrorBodyDetailsItem: core.serialization.Schema<
    serializers.ConflictErrorBodyDetailsItem.Raw,
    Webflow.ConflictErrorBodyDetailsItem
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.record(core.serialization.string(), core.serialization.unknown()),
]);

export declare namespace ConflictErrorBodyDetailsItem {
    type Raw = string | Record<string, unknown>;
}

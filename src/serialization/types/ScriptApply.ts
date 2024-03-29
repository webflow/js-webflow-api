/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Webflow from "../../api";
import * as core from "../../core";

export const ScriptApply: core.serialization.ObjectSchema<serializers.ScriptApply.Raw, Webflow.ScriptApply> =
    core.serialization.object({
        id: core.serialization.string(),
        location: core.serialization.lazy(async () => (await import("..")).ScriptApplyLocation),
        version: core.serialization.string(),
        attributes: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    });

export declare namespace ScriptApply {
    interface Raw {
        id: string;
        location: serializers.ScriptApplyLocation.Raw;
        version: string;
        attributes?: Record<string, unknown> | null;
    }
}

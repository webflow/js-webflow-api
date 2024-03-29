/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Webflow from "../../api";
import * as core from "../../core";

export const FormField: core.serialization.Schema<serializers.FormField.Raw, Webflow.FormField> =
    core.serialization.record(
        core.serialization.string(),
        core.serialization.lazyObject(async () => (await import("..")).FormFieldValue)
    );

export declare namespace FormField {
    type Raw = Record<string, serializers.FormFieldValue.Raw>;
}

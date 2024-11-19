/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Webflow from "../../../../api/index";
import * as core from "../../../../core";

export const FormSubmissionPayloadPayload: core.serialization.ObjectSchema<
    serializers.FormSubmissionPayloadPayload.Raw,
    Webflow.FormSubmissionPayloadPayload
> = core.serialization.object({
    name: core.serialization.string().optional(),
    siteId: core.serialization.string().optional(),
    data: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    schema: core.serialization.list(core.serialization.unknown()).optional(),
    submittedAt: core.serialization.string().optional(),
    id: core.serialization.string().optional(),
    formId: core.serialization.string().optional(),
    formElementId: core.serialization.string().optional(),
});

export declare namespace FormSubmissionPayloadPayload {
    interface Raw {
        name?: string | null;
        siteId?: string | null;
        data?: Record<string, unknown> | null;
        schema?: unknown[] | null;
        submittedAt?: string | null;
        id?: string | null;
        formId?: string | null;
        formElementId?: string | null;
    }
}

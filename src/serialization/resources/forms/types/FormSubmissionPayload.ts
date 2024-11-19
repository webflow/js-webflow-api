/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Webflow from "../../../../api/index";
import * as core from "../../../../core";
import { FormSubmissionPayloadPayload } from "./FormSubmissionPayloadPayload";

export const FormSubmissionPayload: core.serialization.ObjectSchema<
    serializers.FormSubmissionPayload.Raw,
    Webflow.FormSubmissionPayload
> = core.serialization.object({
    triggerType: core.serialization.string().optional(),
    payload: FormSubmissionPayloadPayload.optional(),
});

export declare namespace FormSubmissionPayload {
    interface Raw {
        triggerType?: string | null;
        payload?: FormSubmissionPayloadPayload.Raw | null;
    }
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Webflow from "../../../../api/index";
import * as core from "../../../../core";

export const UpdateStaticContentResponse: core.serialization.ObjectSchema<
    serializers.UpdateStaticContentResponse.Raw,
    Webflow.UpdateStaticContentResponse
> = core.serialization.object({
    errors: core.serialization.list(core.serialization.string()),
});

export declare namespace UpdateStaticContentResponse {
    interface Raw {
        errors: string[];
    }
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Webflow from "../../api/index";
import * as core from "../../core";
import { TooManyRequestsErrorBodyCode } from "./TooManyRequestsErrorBodyCode";
import { TooManyRequestsErrorBodyDetailsItem } from "./TooManyRequestsErrorBodyDetailsItem";

export const TooManyRequestsErrorBody: core.serialization.ObjectSchema<
    serializers.TooManyRequestsErrorBody.Raw,
    Webflow.TooManyRequestsErrorBody
> = core.serialization.object({
    code: TooManyRequestsErrorBodyCode.optional(),
    message: core.serialization.string().optional(),
    externalReference: core.serialization.string().optional(),
    details: core.serialization.list(TooManyRequestsErrorBodyDetailsItem).optional(),
});

export declare namespace TooManyRequestsErrorBody {
    interface Raw {
        code?: TooManyRequestsErrorBodyCode.Raw | null;
        message?: string | null;
        externalReference?: string | null;
        details?: TooManyRequestsErrorBodyDetailsItem.Raw[] | null;
    }
}

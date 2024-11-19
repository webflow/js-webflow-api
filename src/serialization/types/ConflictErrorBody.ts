/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Webflow from "../../api/index";
import * as core from "../../core";
import { ConflictErrorBodyCode } from "./ConflictErrorBodyCode";
import { ConflictErrorBodyDetailsItem } from "./ConflictErrorBodyDetailsItem";

export const ConflictErrorBody: core.serialization.ObjectSchema<
    serializers.ConflictErrorBody.Raw,
    Webflow.ConflictErrorBody
> = core.serialization.object({
    code: ConflictErrorBodyCode.optional(),
    message: core.serialization.string().optional(),
    externalReference: core.serialization.string().optional(),
    details: core.serialization.list(ConflictErrorBodyDetailsItem).optional(),
});

export declare namespace ConflictErrorBody {
    interface Raw {
        code?: ConflictErrorBodyCode.Raw | null;
        message?: string | null;
        externalReference?: string | null;
        details?: ConflictErrorBodyDetailsItem.Raw[] | null;
    }
}

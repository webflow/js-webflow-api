/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Webflow from "../../api/index";
import * as core from "../../core";
import { ErrorDetailsItem } from "./ErrorDetailsItem";

export const NotEnterprisePlanSite: core.serialization.ObjectSchema<
    serializers.NotEnterprisePlanSite.Raw,
    Webflow.NotEnterprisePlanSite
> = core.serialization.object({
    code: core.serialization.stringLiteral("missing_scopes").optional(),
    message: core.serialization.string().optional(),
    externalReference: core.serialization.string().optional(),
    details: core.serialization.list(ErrorDetailsItem).optional(),
});

export declare namespace NotEnterprisePlanSite {
    interface Raw {
        code?: "missing_scopes" | null;
        message?: string | null;
        externalReference?: string | null;
        details?: ErrorDetailsItem.Raw[] | null;
    }
}

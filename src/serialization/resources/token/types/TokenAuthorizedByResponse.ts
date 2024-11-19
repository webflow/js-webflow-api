/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Webflow from "../../../../api/index";
import * as core from "../../../../core";

export const TokenAuthorizedByResponse: core.serialization.ObjectSchema<
    serializers.TokenAuthorizedByResponse.Raw,
    Webflow.TokenAuthorizedByResponse
> = core.serialization.object({
    id: core.serialization.string().optional(),
    email: core.serialization.string().optional(),
    firstName: core.serialization.string().optional(),
    lastName: core.serialization.string().optional(),
});

export declare namespace TokenAuthorizedByResponse {
    interface Raw {
        id?: string | null;
        email?: string | null;
        firstName?: string | null;
        lastName?: string | null;
    }
}

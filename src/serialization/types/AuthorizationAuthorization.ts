/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Webflow from "../../api";
import * as core from "../../core";

export const AuthorizationAuthorization: core.serialization.ObjectSchema<
    serializers.AuthorizationAuthorization.Raw,
    Webflow.AuthorizationAuthorization
> = core.serialization.object({
    id: core.serialization.string().optional(),
    createdOn: core.serialization.date().optional(),
    lastUsed: core.serialization.date().optional(),
    grantType: core.serialization.string().optional(),
    rateLimit: core.serialization.number().optional(),
    scope: core.serialization.string().optional(),
    authorizedTo: core.serialization
        .lazyObject(async () => (await import("..")).AuthorizationAuthorizationAuthorizedTo)
        .optional(),
});

export declare namespace AuthorizationAuthorization {
    interface Raw {
        id?: string | null;
        createdOn?: string | null;
        lastUsed?: string | null;
        grantType?: string | null;
        rateLimit?: number | null;
        scope?: string | null;
        authorizedTo?: serializers.AuthorizationAuthorizationAuthorizedTo.Raw | null;
    }
}

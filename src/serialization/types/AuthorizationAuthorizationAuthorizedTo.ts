/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Webflow from "../../api";
import * as core from "../../core";

export const AuthorizationAuthorizationAuthorizedTo: core.serialization.ObjectSchema<
    serializers.AuthorizationAuthorizationAuthorizedTo.Raw,
    Webflow.AuthorizationAuthorizationAuthorizedTo
> = core.serialization.object({
    siteIds: core.serialization.list(core.serialization.unknown()).optional(),
    workspaceIds: core.serialization.list(core.serialization.unknown()).optional(),
    userIds: core.serialization.list(core.serialization.unknown()).optional(),
});

export declare namespace AuthorizationAuthorizationAuthorizedTo {
    interface Raw {
        siteIds?: unknown[] | null;
        workspaceIds?: unknown[] | null;
        userIds?: unknown[] | null;
    }
}

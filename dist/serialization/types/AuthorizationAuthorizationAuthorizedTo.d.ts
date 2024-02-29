/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as Webflow from "../../api";
import * as core from "../../core";
export declare const AuthorizationAuthorizationAuthorizedTo: core.serialization.ObjectSchema<serializers.AuthorizationAuthorizationAuthorizedTo.Raw, Webflow.AuthorizationAuthorizationAuthorizedTo>;
export declare namespace AuthorizationAuthorizationAuthorizedTo {
    interface Raw {
        siteIds?: unknown[] | null;
        workspaceIds?: unknown[] | null;
        userIds?: unknown[] | null;
    }
}

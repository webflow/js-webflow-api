/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Webflow from "../../../../api/index";
import * as core from "../../../../core";
import { TokenIntrospectResponseAuthorizationAuthorizedTo } from "./TokenIntrospectResponseAuthorizationAuthorizedTo";

export const TokenIntrospectResponseAuthorization: core.serialization.ObjectSchema<
    serializers.TokenIntrospectResponseAuthorization.Raw,
    Webflow.TokenIntrospectResponseAuthorization
> = core.serialization.object({
    id: core.serialization.string().optional(),
    createdOn: core.serialization.date().optional(),
    lastUsed: core.serialization.date().optional(),
    grantType: core.serialization.string().optional(),
    rateLimit: core.serialization.number().optional(),
    scope: core.serialization.string().optional(),
    authorizedTo: TokenIntrospectResponseAuthorizationAuthorizedTo.optional(),
});

export declare namespace TokenIntrospectResponseAuthorization {
    interface Raw {
        id?: string | null;
        createdOn?: string | null;
        lastUsed?: string | null;
        grantType?: string | null;
        rateLimit?: number | null;
        scope?: string | null;
        authorizedTo?: TokenIntrospectResponseAuthorizationAuthorizedTo.Raw | null;
    }
}

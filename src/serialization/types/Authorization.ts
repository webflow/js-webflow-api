/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Webflow from "../../api/index";
import * as core from "../../core";
import { AuthorizationAuthorization } from "./AuthorizationAuthorization";
import { Application } from "./Application";

export const Authorization: core.serialization.ObjectSchema<serializers.Authorization.Raw, Webflow.Authorization> =
    core.serialization.object({
        authorization: AuthorizationAuthorization.optional(),
        application: Application.optional(),
    });

export declare namespace Authorization {
    interface Raw {
        authorization?: AuthorizationAuthorization.Raw | null;
        application?: (Application.Raw | undefined) | null;
    }
}

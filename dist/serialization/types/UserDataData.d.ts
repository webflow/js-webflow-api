/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as Webflow from "../../api";
import * as core from "../../core";
export declare const UserDataData: core.serialization.ObjectSchema<serializers.UserDataData.Raw, Webflow.UserDataData>;
export declare namespace UserDataData {
    interface Raw {
        name?: string | null;
        email?: string | null;
        "accept-privacy"?: boolean | null;
        "accept-communications"?: boolean | null;
        additionalProperties?: string | null;
    }
}

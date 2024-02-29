/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as Webflow from "../../api";
import * as core from "../../core";
export declare const FormList: core.serialization.ObjectSchema<serializers.FormList.Raw, Webflow.FormList>;
export declare namespace FormList {
    interface Raw {
        forms?: serializers.Form.Raw[] | null;
        pagination?: serializers.Pagination.Raw | null;
    }
}

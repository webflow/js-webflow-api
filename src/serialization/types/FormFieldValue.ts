/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Webflow from "../../api/index";
import * as core from "../../core";
import { FormFieldValueType } from "./FormFieldValueType";

export const FormFieldValue: core.serialization.ObjectSchema<serializers.FormFieldValue.Raw, Webflow.FormFieldValue> =
    core.serialization.object({
        displayName: core.serialization.string().optional(),
        type: FormFieldValueType.optional(),
        placeholder: core.serialization.string().optional(),
        userVisible: core.serialization.boolean().optional(),
    });

export declare namespace FormFieldValue {
    interface Raw {
        displayName?: string | null;
        type?: FormFieldValueType.Raw | null;
        placeholder?: string | null;
        userVisible?: boolean | null;
    }
}

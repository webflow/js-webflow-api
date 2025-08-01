/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Webflow from "../../api/index";
import * as core from "../../core";
import { Metadata } from "./Metadata";

export const OptionField: core.serialization.ObjectSchema<serializers.OptionField.Raw, Webflow.OptionField> =
    core.serialization.object({
        id: core.serialization.string().optional(),
        isEditable: core.serialization.boolean().optional(),
        isRequired: core.serialization.boolean().optional(),
        type: core.serialization.stringLiteral("Option"),
        displayName: core.serialization.string(),
        helpText: core.serialization.string().optional(),
        metadata: Metadata,
    });

export declare namespace OptionField {
    interface Raw {
        id?: string | null;
        isEditable?: boolean | null;
        isRequired?: boolean | null;
        type: "Option";
        displayName: string;
        helpText?: string | null;
        metadata: Metadata.Raw;
    }
}

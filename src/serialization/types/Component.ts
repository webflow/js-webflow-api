/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Webflow from "../../api/index";
import * as core from "../../core";

export const Component: core.serialization.ObjectSchema<serializers.Component.Raw, Webflow.Component> =
    core.serialization.object({
        id: core.serialization.string(),
        name: core.serialization.string().optional(),
        group: core.serialization.string().optional(),
        description: core.serialization.string().optional(),
        readonly: core.serialization.boolean().optional(),
    });

export declare namespace Component {
    interface Raw {
        id: string;
        name?: string | null;
        group?: string | null;
        description?: string | null;
        readonly?: boolean | null;
    }
}
/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Webflow from "../../api/index";
import * as core from "../../core";
import { ComponentProperty } from "./ComponentProperty";
import { Pagination } from "./Pagination";

export const ComponentProperties: core.serialization.ObjectSchema<
    serializers.ComponentProperties.Raw,
    Webflow.ComponentProperties
> = core.serialization.object({
    componentId: core.serialization.string().optional(),
    properties: core.serialization.list(ComponentProperty).optional(),
    pagination: Pagination.optional(),
});

export declare namespace ComponentProperties {
    interface Raw {
        componentId?: string | null;
        properties?: ComponentProperty.Raw[] | null;
        pagination?: Pagination.Raw | null;
    }
}
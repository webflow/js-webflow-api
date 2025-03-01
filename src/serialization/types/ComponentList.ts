/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Webflow from "../../api/index";
import * as core from "../../core";
import { Component } from "./Component";
import { Pagination } from "./Pagination";

export const ComponentList: core.serialization.ObjectSchema<serializers.ComponentList.Raw, Webflow.ComponentList> =
    core.serialization.object({
        components: core.serialization.list(Component).optional(),
        pagination: Pagination.optional(),
    });

export declare namespace ComponentList {
    interface Raw {
        components?: Component.Raw[] | null;
        pagination?: Pagination.Raw | null;
    }
}

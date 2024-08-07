/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Webflow from "../../api/index";
import * as core from "../../core";
import { ProductAndSkUs } from "./ProductAndSkUs";
import { Pagination } from "./Pagination";

export const ProductAndSkUsList: core.serialization.ObjectSchema<
    serializers.ProductAndSkUsList.Raw,
    Webflow.ProductAndSkUsList
> = core.serialization.object({
    items: core.serialization.list(ProductAndSkUs).optional(),
    pagination: Pagination.optional(),
});

export declare namespace ProductAndSkUsList {
    interface Raw {
        items?: ProductAndSkUs.Raw[] | null;
        pagination?: Pagination.Raw | null;
    }
}

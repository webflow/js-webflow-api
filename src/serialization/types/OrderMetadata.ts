/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Webflow from "../../api/index";
import * as core from "../../core";

export const OrderMetadata: core.serialization.ObjectSchema<serializers.OrderMetadata.Raw, Webflow.OrderMetadata> =
    core.serialization.object({
        isBuyNow: core.serialization.boolean().optional(),
    });

export declare namespace OrderMetadata {
    interface Raw {
        isBuyNow?: boolean | null;
    }
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as Webflow from "../../api";
import * as core from "../../core";
export declare const OrderMetadata: core.serialization.ObjectSchema<serializers.OrderMetadata.Raw, Webflow.OrderMetadata>;
export declare namespace OrderMetadata {
    interface Raw {
        isBuyNow?: boolean | null;
    }
}

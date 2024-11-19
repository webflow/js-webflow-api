/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Webflow from "../../../../api/index";
import * as core from "../../../../core";

export const EcommOrderChangedPayloadTotalsExtrasItemPrice: core.serialization.ObjectSchema<
    serializers.EcommOrderChangedPayloadTotalsExtrasItemPrice.Raw,
    Webflow.EcommOrderChangedPayloadTotalsExtrasItemPrice
> = core.serialization.object({
    unit: core.serialization.string().optional(),
    value: core.serialization.string().optional(),
    string: core.serialization.string().optional(),
});

export declare namespace EcommOrderChangedPayloadTotalsExtrasItemPrice {
    interface Raw {
        unit?: string | null;
        value?: string | null;
        string?: string | null;
    }
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Webflow from "../../../../api/index";
import * as core from "../../../../core";

export const EcommNewOrderPayloadShippingAddressJapanType: core.serialization.Schema<
    serializers.EcommNewOrderPayloadShippingAddressJapanType.Raw,
    Webflow.EcommNewOrderPayloadShippingAddressJapanType
> = core.serialization.enum_(["kana", "kanji"]);

export declare namespace EcommNewOrderPayloadShippingAddressJapanType {
    type Raw = "kana" | "kanji";
}

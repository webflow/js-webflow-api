/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Webflow from "../../../../api/index";
import * as core from "../../../../core";

export const EcommOrderChangedPayloadAllAddressesItemJapanType: core.serialization.Schema<
    serializers.EcommOrderChangedPayloadAllAddressesItemJapanType.Raw,
    Webflow.EcommOrderChangedPayloadAllAddressesItemJapanType
> = core.serialization.enum_(["kana", "kanji"]);

export declare namespace EcommOrderChangedPayloadAllAddressesItemJapanType {
    type Raw = "kana" | "kanji";
}

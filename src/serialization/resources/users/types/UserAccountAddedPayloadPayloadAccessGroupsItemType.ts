/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Webflow from "../../../../api/index";
import * as core from "../../../../core";

export const UserAccountAddedPayloadPayloadAccessGroupsItemType: core.serialization.Schema<
    serializers.UserAccountAddedPayloadPayloadAccessGroupsItemType.Raw,
    Webflow.UserAccountAddedPayloadPayloadAccessGroupsItemType
> = core.serialization.enum_(["admin", "ecommerce"]);

export declare namespace UserAccountAddedPayloadPayloadAccessGroupsItemType {
    type Raw = "admin" | "ecommerce";
}

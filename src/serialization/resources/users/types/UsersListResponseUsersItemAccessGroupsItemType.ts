/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Webflow from "../../../../api/index";
import * as core from "../../../../core";

export const UsersListResponseUsersItemAccessGroupsItemType: core.serialization.Schema<
    serializers.UsersListResponseUsersItemAccessGroupsItemType.Raw,
    Webflow.UsersListResponseUsersItemAccessGroupsItemType
> = core.serialization.enum_(["admin", "ecommerce"]);

export declare namespace UsersListResponseUsersItemAccessGroupsItemType {
    type Raw = "admin" | "ecommerce";
}

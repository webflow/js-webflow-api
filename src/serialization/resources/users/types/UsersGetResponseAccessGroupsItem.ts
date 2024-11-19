/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Webflow from "../../../../api/index";
import * as core from "../../../../core";
import { UsersGetResponseAccessGroupsItemType } from "./UsersGetResponseAccessGroupsItemType";

export const UsersGetResponseAccessGroupsItem: core.serialization.ObjectSchema<
    serializers.UsersGetResponseAccessGroupsItem.Raw,
    Webflow.UsersGetResponseAccessGroupsItem
> = core.serialization.object({
    slug: core.serialization.string().optional(),
    type: UsersGetResponseAccessGroupsItemType.optional(),
});

export declare namespace UsersGetResponseAccessGroupsItem {
    interface Raw {
        slug?: string | null;
        type?: UsersGetResponseAccessGroupsItemType.Raw | null;
    }
}

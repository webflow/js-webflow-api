/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Webflow from "../../../../api/index";
import * as core from "../../../../core";

export const OrdersUpdateUnfulfillResponseDownloadFilesItem: core.serialization.ObjectSchema<
    serializers.OrdersUpdateUnfulfillResponseDownloadFilesItem.Raw,
    Webflow.OrdersUpdateUnfulfillResponseDownloadFilesItem
> = core.serialization.object({
    id: core.serialization.string().optional(),
    name: core.serialization.string().optional(),
    url: core.serialization.string().optional(),
});

export declare namespace OrdersUpdateUnfulfillResponseDownloadFilesItem {
    interface Raw {
        id?: string | null;
        name?: string | null;
        url?: string | null;
    }
}

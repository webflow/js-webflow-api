/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Webflow from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { CollectionItem } from "../../../../../types/CollectionItem";
import { ItemsCreateItemLiveRequestItems } from "./ItemsCreateItemLiveRequestItems";

export const ItemsCreateItemLiveRequest: core.serialization.Schema<
    serializers.collections.ItemsCreateItemLiveRequest.Raw,
    Webflow.collections.ItemsCreateItemLiveRequest
> = core.serialization.undiscriminatedUnion([CollectionItem, ItemsCreateItemLiveRequestItems]);

export declare namespace ItemsCreateItemLiveRequest {
    type Raw = CollectionItem.Raw | ItemsCreateItemLiveRequestItems.Raw;
}

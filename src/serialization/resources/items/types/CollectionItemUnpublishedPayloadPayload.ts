/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Webflow from "../../../../api/index";
import * as core from "../../../../core";

export const CollectionItemUnpublishedPayloadPayload: core.serialization.ObjectSchema<
    serializers.CollectionItemUnpublishedPayloadPayload.Raw,
    Webflow.CollectionItemUnpublishedPayloadPayload
> = core.serialization.object({
    id: core.serialization.string().optional(),
    siteId: core.serialization.string().optional(),
    workspaceId: core.serialization.string().optional(),
    collectionId: core.serialization.string().optional(),
});

export declare namespace CollectionItemUnpublishedPayloadPayload {
    interface Raw {
        id?: string | null;
        siteId?: string | null;
        workspaceId?: string | null;
        collectionId?: string | null;
    }
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Webflow from "../../../../../api/index";
import * as core from "../../../../../core";

export const SitesUpdateRequest: core.serialization.Schema<
    serializers.SitesUpdateRequest.Raw,
    Webflow.SitesUpdateRequest
> = core.serialization.object({
    name: core.serialization.string().optional(),
    parentFolderId: core.serialization.string().optional(),
});

export declare namespace SitesUpdateRequest {
    interface Raw {
        name?: string | null;
        parentFolderId?: string | null;
    }
}

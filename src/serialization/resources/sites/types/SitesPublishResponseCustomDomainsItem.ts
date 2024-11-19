/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Webflow from "../../../../api/index";
import * as core from "../../../../core";

export const SitesPublishResponseCustomDomainsItem: core.serialization.ObjectSchema<
    serializers.SitesPublishResponseCustomDomainsItem.Raw,
    Webflow.SitesPublishResponseCustomDomainsItem
> = core.serialization.object({
    id: core.serialization.string(),
    url: core.serialization.string().optional(),
});

export declare namespace SitesPublishResponseCustomDomainsItem {
    interface Raw {
        id: string;
        url?: string | null;
    }
}

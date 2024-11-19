/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Webflow from "../../../../api/index";
import * as core from "../../../../core";

export const SitesGetResponseLocalesSecondaryItem: core.serialization.ObjectSchema<
    serializers.SitesGetResponseLocalesSecondaryItem.Raw,
    Webflow.SitesGetResponseLocalesSecondaryItem
> = core.serialization.object({
    id: core.serialization.string().optional(),
    cmsLocaleId: core.serialization.string().optional(),
    enabled: core.serialization.boolean().optional(),
    displayName: core.serialization.string().optional(),
    displayImageId: core.serialization.string().optional(),
    redirect: core.serialization.boolean().optional(),
    subdirectory: core.serialization.string().optional(),
    tag: core.serialization.string().optional(),
});

export declare namespace SitesGetResponseLocalesSecondaryItem {
    interface Raw {
        id?: string | null;
        cmsLocaleId?: string | null;
        enabled?: boolean | null;
        displayName?: string | null;
        displayImageId?: string | null;
        redirect?: boolean | null;
        subdirectory?: string | null;
        tag?: string | null;
    }
}

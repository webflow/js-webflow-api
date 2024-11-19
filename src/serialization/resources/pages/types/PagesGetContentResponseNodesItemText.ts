/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Webflow from "../../../../api/index";
import * as core from "../../../../core";

export const PagesGetContentResponseNodesItemText: core.serialization.ObjectSchema<
    serializers.PagesGetContentResponseNodesItemText.Raw,
    Webflow.PagesGetContentResponseNodesItemText
> = core.serialization.object({
    html: core.serialization.string().optional(),
    text: core.serialization.string().optional(),
});

export declare namespace PagesGetContentResponseNodesItemText {
    interface Raw {
        html?: string | null;
        text?: string | null;
    }
}

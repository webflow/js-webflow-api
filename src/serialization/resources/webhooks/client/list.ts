/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Webflow from "../../../../api";
import * as core from "../../../../core";

export const Response: core.serialization.Schema<serializers.webhooks.list.Response.Raw, Webflow.Webhook[]> =
    core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).Webhook));

export declare namespace Response {
    type Raw = serializers.Webhook.Raw[];
}

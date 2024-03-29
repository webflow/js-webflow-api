/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as Webflow from "../../../../../api";
import * as core from "../../../../../core";

export const DomWrite: core.serialization.Schema<
    serializers.DomWrite.Raw,
    Omit<Webflow.DomWrite, "locale">
> = core.serialization.object({
    nodes: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../../..")).DomWriteNodesItem)
    ),
});

export declare namespace DomWrite {
    interface Raw {
        nodes: serializers.DomWriteNodesItem.Raw[];
    }
}

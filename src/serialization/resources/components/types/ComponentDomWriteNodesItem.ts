/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Webflow from "../../../../api/index";
import * as core from "../../../../core";
import { TextNodeWrite } from "../../../types/TextNodeWrite";
import { ComponentInstanceNodePropertyOverridesWrite } from "../../../types/ComponentInstanceNodePropertyOverridesWrite";

export const ComponentDomWriteNodesItem: core.serialization.Schema<
    serializers.ComponentDomWriteNodesItem.Raw,
    Webflow.ComponentDomWriteNodesItem
> = core.serialization.undiscriminatedUnion([TextNodeWrite, ComponentInstanceNodePropertyOverridesWrite]);

export declare namespace ComponentDomWriteNodesItem {
    type Raw = TextNodeWrite.Raw | ComponentInstanceNodePropertyOverridesWrite.Raw;
}

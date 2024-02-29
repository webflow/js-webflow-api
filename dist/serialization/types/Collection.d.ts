/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as Webflow from "../../api";
import * as core from "../../core";
export declare const Collection: core.serialization.ObjectSchema<serializers.Collection.Raw, Webflow.Collection>;
export declare namespace Collection {
    interface Raw {
        id: string;
        displayName?: string | null;
        singularName?: string | null;
        slug?: string | null;
        createdOn?: string | null;
        lastUpdated?: string | null;
        fields: Record<string, unknown>;
    }
}

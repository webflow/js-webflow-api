/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "..";
import * as Webflow from "../../api";
import * as core from "../../core";
export declare const PublishedItems: core.serialization.ObjectSchema<serializers.PublishedItems.Raw, Webflow.PublishedItems>;
export declare namespace PublishedItems {
    interface Raw {
        publishedItemIds?: string[] | null;
        errors?: string[] | null;
    }
}

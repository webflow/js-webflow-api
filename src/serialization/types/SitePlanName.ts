/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Webflow from "../../api/index";
import * as core from "../../core";

export const SitePlanName: core.serialization.Schema<serializers.SitePlanName.Raw, Webflow.SitePlanName> =
    core.serialization.enum_([
        "Basic Hosting",
        "CMS Hosting",
        "Business Hosting",
        "ECommerce Standard Hosting",
        "ECommerce Plus Hosting",
        "ECommerce Advanced Hosting",
    ]);

export declare namespace SitePlanName {
    type Raw =
        | "Basic Hosting"
        | "CMS Hosting"
        | "Business Hosting"
        | "ECommerce Standard Hosting"
        | "ECommerce Plus Hosting"
        | "ECommerce Advanced Hosting";
}

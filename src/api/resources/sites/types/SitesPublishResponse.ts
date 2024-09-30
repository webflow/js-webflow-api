/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Webflow from "../../../index";

export interface SitesPublishResponse {
    /** Array of domains objects */
    customDomains?: Webflow.Domain[];
    /** Flag for publishing to webflow.io subdomain */
    publishToWebflowSubdomain?: boolean;
}
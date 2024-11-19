/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Webflow from "../../../../../index";

export interface ScriptsUpsertCustomCodeResponse {
    /** A list of scripts applied to a Site or a Page */
    scripts?: Webflow.sites.ScriptsUpsertCustomCodeResponseScriptsItem[];
    /** Date when the Site's scripts were last updated */
    lastUpdated?: string;
    /** Date when the Site's scripts were created */
    createdOn?: string;
}

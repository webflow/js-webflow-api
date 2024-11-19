/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Webflow from "../../../../../index";

export interface ScriptsUpsertCustomCodeRequestScriptsItem {
    /** ID of the registered custom code script */
    id: string;
    /** Location of the script, either in the header or footer of the published site */
    location: Webflow.pages.ScriptsUpsertCustomCodeRequestScriptsItemLocation;
    /** Semantic Version String for the registered script _e.g. 0.0.1_ */
    version: string;
    /** Developer-specified key/value pairs to be applied as attributes to the script */
    attributes?: Record<string, unknown>;
}

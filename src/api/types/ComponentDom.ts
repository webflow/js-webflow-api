/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Webflow from "../index";

/**
 * The Component DOM schema represents the content structure of a component. Similar to Page DOM, it captures various content nodes and their associated attributes, but specifically for a component's structure. Each node has a unique identifier and  can contain text, images, or nested component instances.
 */
export interface ComponentDom {
    /** Component ID */
    componentId?: string;
    nodes?: Webflow.Node[];
    pagination?: Webflow.Pagination;
}

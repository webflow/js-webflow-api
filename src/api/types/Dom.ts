/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Webflow from "..";

/**
 * The DOM (Document Object Model) schema represents the content structure of a web page. It captures various content nodes, such as text and images, along with their associated attributes. Each node has a unique identifier and can be of different types like text or image. The schema also provides pagination details for scenarios where the content nodes are too many to be fetched in a single request.
 */
export interface Dom {
    /** Page ID */
    pageId?: string;
    nodes?: Webflow.Node[];
    pagination?: Webflow.Pagination;
}

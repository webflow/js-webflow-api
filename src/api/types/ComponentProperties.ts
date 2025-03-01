/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Webflow from "../index";

/**
 * The Component Properties schema represents a list of properties that store text content. Each property has a unique identifier and can be of different types like plain text or rich text. The schema also provides pagination details for scenarios where there more properties than the limit.
 */
export interface ComponentProperties {
    /** Component ID */
    componentId?: string;
    properties?: Webflow.ComponentProperty[];
    pagination?: Webflow.Pagination;
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Webflow from "../index";

/**
 * Represents a component instance within the DOM. It contains details about the component instance, such as its type and properties.
 */
export interface ComponentNode {
    /** The unique identifier of the component instance node */
    id: string;
    /** The unique identifier of the component */
    componentId: string;
    /** List of component properties with overrides for a component instance. */
    propertyOverrides: Webflow.ComponentProperty[];
}

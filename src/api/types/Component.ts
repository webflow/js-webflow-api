/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The Component object
 */
export interface Component {
    /** Unique identifier for the Component */
    id: string;
    /** Component Name */
    name?: string;
    /** The group that the component belongs to */
    group?: string;
    /** Component Description */
    description?: string;
    /** Indicates whether the component is read-only. Components that cannot be updated within this Site are set to readonly. Workspace Libraries are a good example. */
    readonly?: boolean;
}

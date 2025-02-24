/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Webflow from "../index";

/**
 * A field that references item(s) in another collection.
 */
export interface ReferenceField {
    /** define whether a field is required in a collection */
    isRequired?: boolean;
    /** Choose to reference a single item or multiple items from a collection. */
    type: Webflow.FieldCreateMetadataType;
    /** The name of a field */
    displayName: string;
    /** Additional text to help anyone filling out this field */
    helpText?: string;
    /** The collectionId for the referenced collection. Only applicable for Reference and MultiReference fields. */
    metadata: Webflow.FieldCreateMetadataMetadata;
}

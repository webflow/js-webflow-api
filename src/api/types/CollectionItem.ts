/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Webflow from "../index";

/**
 * A Collection Item represents a single entry in your collection. Each item includes:
 *
 * - **System metadata** - Automatically managed fields like IDs and timestamp <br/>
 * - **Status flags** - Controls for managing content state: `isDraft`, `isArchived `<br/>
 * - **Content fields** - Stored in `fieldData`. Each item needs a `name` and `slug`, and may include additional fields matching your collection's schema definition.
 */
export interface CollectionItem {
    /** Unique identifier for the Item */
    id?: string;
    /** Identifier for the locale of the CMS item */
    cmsLocaleId?: string;
    /** The date the item was last published */
    lastPublished?: string;
    /** The date the item was last updated */
    lastUpdated?: string;
    /** The date the item was created */
    createdOn?: string;
    /** Boolean determining if the Item is set to archived */
    isArchived?: boolean;
    /** Boolean determining if the Item is set to draft */
    isDraft?: boolean;
    fieldData: Webflow.CollectionItemFieldData;
}

import { Webflow } from "../../index";

// Overriding this type to include skipInvalidFiles to prevent breaking change where Fern may wrap the existing request body in a `body` wrapper object
export type ItemsUpdateItemRequest = Webflow.CollectionItemPatchSingle & {
    skipInvalidFiles?: boolean;
};

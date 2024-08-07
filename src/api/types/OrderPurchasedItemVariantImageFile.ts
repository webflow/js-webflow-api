/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Webflow from "../index";

export interface OrderPurchasedItemVariantImageFile {
    /** The image size in bytes */
    size?: number;
    /** the original name of the image */
    originalFileName?: string;
    /** The creation timestamp of the image */
    createdOn?: Date;
    /** The MIME type of the image */
    contentType?: string;
    /** The image width in pixels */
    width?: number;
    /** The image height in pixels */
    height?: number;
    /** Variants of the supplied image */
    variants?: Webflow.OrderPurchasedItemVariantImageFileVariantsItem[];
}

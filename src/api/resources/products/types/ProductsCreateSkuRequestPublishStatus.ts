/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Indicate whether your Product should be set as "staging" or "live"
 */
export type ProductsCreateSkuRequestPublishStatus = "staging" | "live";

export const ProductsCreateSkuRequestPublishStatus = {
    Staging: "staging",
    Live: "live",
} as const;

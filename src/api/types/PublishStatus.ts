/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Indicate whether your Product should be set as "staging" or "live"
 */
export type PublishStatus = "staging" | "live";

export const PublishStatus = {
    Staging: "staging",
    Live: "live",
} as const;

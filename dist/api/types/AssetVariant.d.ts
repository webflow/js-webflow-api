/**
 * This file was auto-generated by Fern from our API Definition.
 */
export interface AssetVariant {
    hostedUrl?: string;
    originalFileName?: string;
    displayName?: string;
    format?: string;
    /** Width in pixels */
    width?: number;
    /** Height in pixels */
    height?: number;
    /** Value between 0 and 100 representing the image quality */
    quality?: number;
    /** Any associated validation errors */
    error?: string;
}

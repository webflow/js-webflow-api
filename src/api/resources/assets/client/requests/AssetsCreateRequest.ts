/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         fileName: "file.png",
 *         fileHash: "3c7d87c9575702bc3b1e991f4d3c638e"
 *     }
 */
export interface AssetsCreateRequest {
    /** file name including file extension */
    fileName: string;
    /** MD5 hash of the file */
    fileHash: string;
    /** id of the Asset folder (optional) */
    parentFolder?: string;
}

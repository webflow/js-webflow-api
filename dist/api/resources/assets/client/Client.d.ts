/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Webflow from "../../..";
export declare namespace Assets {
    interface Options {
        environment?: core.Supplier<environments.WebflowEnvironment | string>;
        accessToken: core.Supplier<core.BearerToken>;
    }
    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}
export declare class Assets {
    protected readonly _options: Assets.Options;
    constructor(_options: Assets.Options);
    /**
     * List assets for a given site </br></br> Required scope | `assets:read`
     * @throws {@link Webflow.BadRequestError}
     * @throws {@link Webflow.UnauthorizedError}
     * @throws {@link Webflow.NotFoundError}
     * @throws {@link Webflow.TooManyRequestsError}
     * @throws {@link Webflow.InternalServerError}
     *
     * @example
     *     await webflow.assets.list("string")
     */
    list(siteId: string, requestOptions?: Assets.RequestOptions): Promise<Webflow.Asset[]>;
    /**
     * Create a new asset entry. </br></br> This endpoint generates a response with the following information: `uploadUrl` and `uploadDetails`. You can use these two properties to [upload the file to Amazon s3 by making a POST](https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPOST.html) request to the `uploadUrl` with the `uploadDetails` object as your header information in the request. </br></br> Required scope | `assets:write`
     * @throws {@link Webflow.BadRequestError}
     * @throws {@link Webflow.UnauthorizedError}
     * @throws {@link Webflow.NotFoundError}
     * @throws {@link Webflow.TooManyRequestsError}
     * @throws {@link Webflow.InternalServerError}
     *
     * @example
     *     await webflow.assets.create("string", {
     *         fileName: "file.png",
     *         fileHash: "3c7d87c9575702bc3b1e991f4d3c638e",
     *         parentFolder: "6436b1ce5281cace05b65aea"
     *     })
     */
    create(siteId: string, request: Webflow.AssetsCreateRequest, requestOptions?: Assets.RequestOptions): Promise<Webflow.AssetUpload>;
    /**
     * Get an Asset </br></br> Required scope | `assets:read`
     * @throws {@link Webflow.BadRequestError}
     * @throws {@link Webflow.UnauthorizedError}
     * @throws {@link Webflow.NotFoundError}
     * @throws {@link Webflow.TooManyRequestsError}
     * @throws {@link Webflow.InternalServerError}
     *
     * @example
     *     await webflow.assets.get("string")
     */
    get(assetId: string, requestOptions?: Assets.RequestOptions): Promise<Webflow.Asset>;
    /**
     * Delete an Asset
     * @throws {@link Webflow.BadRequestError}
     * @throws {@link Webflow.UnauthorizedError}
     * @throws {@link Webflow.NotFoundError}
     * @throws {@link Webflow.TooManyRequestsError}
     * @throws {@link Webflow.InternalServerError}
     *
     * @example
     *     await webflow.assets.delete("string")
     */
    delete(assetId: string, requestOptions?: Assets.RequestOptions): Promise<void>;
    /**
     * List Asset Folders within a given site <br><br> Required scope | `assets:read`
     * @throws {@link Webflow.BadRequestError}
     * @throws {@link Webflow.UnauthorizedError}
     * @throws {@link Webflow.NotFoundError}
     * @throws {@link Webflow.TooManyRequestsError}
     * @throws {@link Webflow.InternalServerError}
     *
     * @example
     *     await webflow.assets.listFolders("string")
     */
    listFolders(siteId: string, requestOptions?: Assets.RequestOptions): Promise<Webflow.AssetFolderList>;
    /**
     * Create an Asset Folder within a given site <br><br> Required scope | `assets:write`
     * @throws {@link Webflow.BadRequestError}
     * @throws {@link Webflow.UnauthorizedError}
     * @throws {@link Webflow.NotFoundError}
     * @throws {@link Webflow.TooManyRequestsError}
     * @throws {@link Webflow.InternalServerError}
     *
     * @example
     *     await webflow.assets.createFolder("string", {
     *         displayName: "my asset folder",
     *         parentFolder: "6390c49774a71f99f21a08eb"
     *     })
     */
    createFolder(siteId: string, request: Webflow.AssetsCreateFolderRequest, requestOptions?: Assets.RequestOptions): Promise<Webflow.AssetFolder>;
    /**
     * Get details about a specific Asset Folder <br><br> Required scope | `assets:read`
     * @throws {@link Webflow.BadRequestError}
     * @throws {@link Webflow.UnauthorizedError}
     * @throws {@link Webflow.NotFoundError}
     * @throws {@link Webflow.TooManyRequestsError}
     * @throws {@link Webflow.InternalServerError}
     *
     * @example
     *     await webflow.assets.getFolder("string")
     */
    getFolder(assetFolderId: string, requestOptions?: Assets.RequestOptions): Promise<Webflow.AssetFolder>;
    protected _getAuthorizationHeader(): Promise<string>;
}

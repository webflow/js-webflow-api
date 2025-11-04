import { Assets } from "../api/resources/assets/client/Client";
import { Client as Utilities } from "./AssetsUtilitiesClient";
import * as Webflow from "../api/index";
import * as core from "../core";

// Extends the namespace declared in the Fern generated client
declare module "../api/resources/assets/client/Client" {
    export namespace Assets {
        // interface RequestSignatureDetails {
        //     /** The headers of the incoming webhook request as a record-like object */
        //     headers: Record<string, string>;
        //     /** The body of the incoming webhook request as a string */
        //     body: string;
        //     /** The secret key generated when creating the webhook or the OAuth client secret */
        //     secret: string;
        // }
    }
}

export class Client extends Assets {
    constructor(protected readonly _options: Assets.Options) {
        super(_options);
    }
    // IMPORTANT: Need to keep function overload signatures for the list() API for backwards compatibility.
    // In v.3.2.1, we are introducing a new 2nd parameter for the request object which allows
    // for pagination options to be passed in

    /**
     * List of assets uploaded to a site
     * 
     * Supports both the old 2-parameter API and new 3-parameter API for backward compatibility
     *
     * Required scope | `assets:read`
     *
     * @param {string} siteId - Unique identifier for a Site
     * @param {Assets.RequestOptions} requestOptions - Request-specific configuration.
     */
    public list(siteId: string, requestOptions?: Assets.RequestOptions): core.HttpResponsePromise<Webflow.Assets>;
   
    /**
     * List of assets uploaded to a site
     *
     * Required scope | `assets:read`
     *
     * @param {string} siteId - Unique identifier for a Site
     * @param {Webflow.AssetsListRequest} request
     * @param {Assets.RequestOptions} requestOptions - Request-specific configuration.
     */
    public list(
        siteId: string,
        request: Webflow.AssetsListRequest,
        requestOptions?: Assets.RequestOptions,
    ): core.HttpResponsePromise<Webflow.Assets>;

    public list(
        siteId: string,
        requestOrOptions?: Webflow.AssetsListRequest | Assets.RequestOptions,
        requestOptions?: Assets.RequestOptions,
    ): core.HttpResponsePromise<Webflow.Assets> {
        // Check if the second parameter is RequestOptions (old API) or AssetsListRequest (new API)
        // RequestOptions has properties like timeoutInSeconds, maxRetries, abortSignal, headers
        // AssetsListRequest has properties like offset, limit
        const isOldApi = this._isRequestOptions(requestOrOptions);

        if (isOldApi) {
            // Old 2-parameter API: list(siteId, requestOptions)
            return super.list(siteId, {}, requestOrOptions as Assets.RequestOptions);
        } else {
            // New 3-parameter API: list(siteId, request, requestOptions)
            return super.list(siteId, requestOrOptions as Webflow.AssetsListRequest, requestOptions);
        }
    }

    private _isRequestOptions(param?: Webflow.AssetsListRequest | Assets.RequestOptions): param is Assets.RequestOptions {
        if (!param) {
            return false;
        }
        // Check if it has RequestOptions-specific properties
        const hasRequestOptionsProps =
            "timeoutInSeconds" in param ||
            "maxRetries" in param ||
            "abortSignal" in param;
        
        // Check if it has AssetsListRequest-specific properties
        const hasAssetsListRequestProps = "offset" in param || "limit" in param;
        
        // If it has RequestOptions properties, it's RequestOptions
        if (hasRequestOptionsProps) {
            return true;
        }
        
        // If it has AssetsListRequest properties, it's not RequestOptions
        if (hasAssetsListRequestProps) {
            return false;
        }
        
        // If it only has headers, check if there are other properties
        // headers can be in both types, so we need to be careful
        if ("headers" in param) {
            // If only headers property exists, assume it's RequestOptions
            const keys = Object.keys(param);
            return keys.length === 1 && keys[0] === "headers";
        }
        
        // Default to treating empty object as AssetsListRequest (new API)
        return false;
    }

    protected _utilities: Utilities | undefined;

    public get utilities(): Utilities {
        return (this._utilities ??= new Utilities(this._options));
    }
}
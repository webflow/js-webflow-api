import urlJoin from "url-join";
import * as Webflow from "../api";
import { Items } from "../api/resources/collections/resources/items/client/Client";
import * as core from "../core";
import * as environments from "../environments";
import * as errors from "../errors";
import * as serializers from "../serialization";
import { mergeHeaders, mergeOnlyDefinedHeaders } from "../core/headers.js";
import * as SchemaOverrides from "./schemas";

declare module "../api/resources/collections/resources/items/client/Client" {
    export namespace Items {}
}

// Temporary wrapper for backwards compatibility keeping the createItemForMultipleLocales method
// a mirror of the createItems API
export class Client extends Items {
    constructor(protected readonly _options: Items.Options) {
        super(_options);
    }

    /**
     * Create Item(s) in a Collection.
     *
     *
     * To create items across multiple locales, please use [this endpoint.](/data/reference/cms/collection-items/staged-items/create-items)
     *
     * Required scope | `CMS:write`
     *
     * @param {string} collectionId - Unique identifier for a Collection
     * @param {SchemaOverrides.ItemsCreateItemRequest} request
     * @param {Items.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Webflow.BadRequestError}
     * @throws {@link Webflow.UnauthorizedError}
     * @throws {@link Webflow.NotFoundError}
     * @throws {@link Webflow.TooManyRequestsError}
     * @throws {@link Webflow.InternalServerError}
     *
     * @example
     *     await client.collections.items.createItem("580e63fc8c9a982ac9b8b745", {
     *         isArchived: false,
     *         isDraft: false,
     *         fieldData: {
     *             name: "Pan Galactic Gargle Blaster Recipe",
     *             slug: "pan-galactic-gargle-blaster"
     *         }
     *     })
     *
     * @example
     *     await client.collections.items.createItem("580e63fc8c9a982ac9b8b745", {
     *         items: [{
     *                     isArchived: false,
     *                     isDraft: false,
     *                     fieldData: {
     *                         name: "Senior Data Analyst",
     *                         slug: "senior-data-analyst"
     *                     }
     *                 }, {
     *                     isArchived: false,
     *                     isDraft: false,
     *                     fieldData: {
     *                         name: "Product Manager",
     *                         slug: "product-manager"
     *                     }
     *                 }]
     *     })
     */
    public createItem(
        collectionId: string,
        request: SchemaOverrides.ItemsCreateItemRequest,
        requestOptions?: Items.RequestOptions,
    ): core.HttpResponsePromise<Webflow.CollectionItem> {
        return core.HttpResponsePromise.fromPromise(this.__createItemOverride(collectionId, request, requestOptions));
    }

    private async __createItemOverride(
        collectionId: string,
        request: SchemaOverrides.ItemsCreateItemRequest,
        requestOptions?: Items.RequestOptions,
    ): Promise<core.WithRawResponse<Webflow.CollectionItem>> {
        const { skipInvalidFiles, ..._body } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        if (skipInvalidFiles != null) {
            _queryParams["skipInvalidFiles"] = skipInvalidFiles.toString();
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    ((await core.Supplier.get(this._options.environment)) ?? environments.WebflowEnvironment.DataApi)
                        .base,
                `collections/${encodeURIComponent(collectionId)}/items`,
            ),
            method: "POST",
            headers: mergeHeaders(
                this._options?.headers,
                mergeOnlyDefinedHeaders({ Authorization: await this._getAuthorizationHeader() }),
                requestOptions?.headers,
            ),
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            body: serializers.collections.ItemsCreateItemRequestBody.jsonOrThrow(_body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                data: serializers.CollectionItem.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Webflow.BadRequestError(_response.error.body, _response.rawResponse);
                case 401:
                    throw new Webflow.UnauthorizedError(
                        serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                        _response.rawResponse,
                    );
                case 404:
                    throw new Webflow.NotFoundError(
                        serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                        _response.rawResponse,
                    );
                case 429:
                    throw new Webflow.TooManyRequestsError(
                        serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                        _response.rawResponse,
                    );
                case 500:
                    throw new Webflow.InternalServerError(
                        serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                        _response.rawResponse,
                    );
                default:
                    throw new errors.WebflowError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.WebflowError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.WebflowTimeoutError(
                    "Timeout exceeded when calling POST /collections/{collection_id}/items.",
                );
            case "unknown":
                throw new errors.WebflowError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Update a selected Item in a Collection.
     *
     * Required scope | `CMS:write`
     *
     * @param {string} collectionId - Unique identifier for a Collection
     * @param {string} itemId - Unique identifier for an Item
     * @param {SchemaOverrides.ItemsUpdateItemRequest} request
     * @param {Items.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Webflow.BadRequestError}
     * @throws {@link Webflow.UnauthorizedError}
     * @throws {@link Webflow.NotFoundError}
     * @throws {@link Webflow.TooManyRequestsError}
     * @throws {@link Webflow.InternalServerError}
     *
     * @example
     *     await client.collections.items.updateItem("580e63fc8c9a982ac9b8b745", "580e64008c9a982ac9b8b754", {
     *             isArchived: false,
     *             isDraft: false,
     *             fieldData: {
     *                 name: "Pan Galactic Gargle Blaster Recipe",
     *                 slug: "pan-galactic-gargle-blaster"
     *             }
     *     })
     */
    public updateItem(
        collectionId: string,
        itemId: string,
        request: SchemaOverrides.ItemsUpdateItemRequest,
        requestOptions?: Items.RequestOptions,
    ): core.HttpResponsePromise<Webflow.CollectionItem> {
        return core.HttpResponsePromise.fromPromise(
            this.__updateItemOverride(collectionId, itemId, request, requestOptions),
        );
    }

    private async __updateItemOverride(
        collectionId: string,
        itemId: string,
        request: SchemaOverrides.ItemsUpdateItemRequest,
        requestOptions?: Items.RequestOptions,
    ): Promise<core.WithRawResponse<Webflow.CollectionItem>> {
        const { skipInvalidFiles, ..._body } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        if (skipInvalidFiles != null) {
            _queryParams["skipInvalidFiles"] = skipInvalidFiles.toString();
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    ((await core.Supplier.get(this._options.environment)) ?? environments.WebflowEnvironment.DataApi)
                        .base,
                `collections/${encodeURIComponent(collectionId)}/items/${encodeURIComponent(itemId)}`,
            ),
            method: "PATCH",
            headers: mergeHeaders(
                this._options?.headers,
                mergeOnlyDefinedHeaders({ Authorization: await this._getAuthorizationHeader() }),
                requestOptions?.headers,
            ),
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            body: serializers.CollectionItemPatchSingle.jsonOrThrow(_body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                data: serializers.CollectionItem.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Webflow.BadRequestError(_response.error.body, _response.rawResponse);
                case 401:
                    throw new Webflow.UnauthorizedError(
                        serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                        _response.rawResponse,
                    );
                case 404:
                    throw new Webflow.NotFoundError(
                        serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                        _response.rawResponse,
                    );
                case 429:
                    throw new Webflow.TooManyRequestsError(
                        serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                        _response.rawResponse,
                    );
                case 500:
                    throw new Webflow.InternalServerError(
                        serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                        _response.rawResponse,
                    );
                default:
                    throw new errors.WebflowError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.WebflowError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.WebflowTimeoutError(
                    "Timeout exceeded when calling PATCH /collections/{collection_id}/items/{item_id}.",
                );
            case "unknown":
                throw new errors.WebflowError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Create item(s) in a collection that will be immediately published to the live site.
     *
     *
     * To create items across multiple locales, [please use this endpoint.](/data/reference/cms/collection-items/staged-items/create-items)
     *
     *
     * Required scope | `CMS:write`
     *
     * @param {string} collectionId - Unique identifier for a Collection
     * @param {Webflow.collections.ItemsCreateItemLiveRequest} request
     * @param {Items.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Webflow.BadRequestError}
     * @throws {@link Webflow.UnauthorizedError}
     * @throws {@link Webflow.NotFoundError}
     * @throws {@link Webflow.TooManyRequestsError}
     * @throws {@link Webflow.InternalServerError}
     *
     * @example
     *     await client.collections.items.createItemLive("580e63fc8c9a982ac9b8b745", {
     *             isArchived: false,
     *             isDraft: false,
     *             fieldData: {
     *                 name: "Pan Galactic Gargle Blaster Recipe",
     *                 slug: "pan-galactic-gargle-blaster"
     *             }
     *     })
     *
     * @example
     *     await client.collections.items.createItemLive("580e63fc8c9a982ac9b8b745", {
     *             items: [{
     *                     isArchived: false,
     *                     isDraft: false,
     *                     fieldData: {
     *                         name: "Senior Data Analyst",
     *                         slug: "senior-data-analyst"
     *                     }
     *                 }, {
     *                     isArchived: false,
     *                     isDraft: false,
     *                     fieldData: {
     *                         name: "Product Manager",
     *                         slug: "product-manager"
     *                     }
     *                 }]
     *     })
     */
    public createItemLive(
        collectionId: string,
        request: SchemaOverrides.ItemsCreateItemLiveRequest,
        requestOptions?: Items.RequestOptions,
    ): core.HttpResponsePromise<Webflow.CollectionItem> {
        return core.HttpResponsePromise.fromPromise(
            this.__createItemLiveOverride(collectionId, request, requestOptions),
        );
    }

    private async __createItemLiveOverride(
        collectionId: string,
        request: SchemaOverrides.ItemsCreateItemLiveRequest,
        requestOptions?: Items.RequestOptions,
    ): Promise<core.WithRawResponse<Webflow.CollectionItem>> {
        const { skipInvalidFiles, ..._body } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        if (skipInvalidFiles != null) {
            _queryParams["skipInvalidFiles"] = skipInvalidFiles.toString();
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    ((await core.Supplier.get(this._options.environment)) ?? environments.WebflowEnvironment.DataApi)
                        .base,
                `collections/${encodeURIComponent(collectionId)}/items/live`,
            ),
            method: "POST",
            headers: mergeHeaders(
                this._options?.headers,
                mergeOnlyDefinedHeaders({ Authorization: await this._getAuthorizationHeader() }),
                requestOptions?.headers,
            ),
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            body: serializers.collections.ItemsCreateItemLiveRequestBody.jsonOrThrow(_body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                data: serializers.CollectionItem.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Webflow.BadRequestError(_response.error.body, _response.rawResponse);
                case 401:
                    throw new Webflow.UnauthorizedError(
                        serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                        _response.rawResponse,
                    );
                case 404:
                    throw new Webflow.NotFoundError(
                        serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                        _response.rawResponse,
                    );
                case 429:
                    throw new Webflow.TooManyRequestsError(
                        serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                        _response.rawResponse,
                    );
                case 500:
                    throw new Webflow.InternalServerError(
                        serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                        _response.rawResponse,
                    );
                default:
                    throw new errors.WebflowError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.WebflowError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.WebflowTimeoutError(
                    "Timeout exceeded when calling POST /collections/{collection_id}/items/live.",
                );
            case "unknown":
                throw new errors.WebflowError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Update a selected live Item in a Collection. The updates for this Item will be published to the live site.
     *
     * Required scope | `CMS:write`
     *
     * @param {string} collectionId - Unique identifier for a Collection
     * @param {string} itemId - Unique identifier for an Item
     * @param {Webflow.collections.ItemsUpdateItemLiveRequest} request
     * @param {Items.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Webflow.BadRequestError}
     * @throws {@link Webflow.UnauthorizedError}
     * @throws {@link Webflow.NotFoundError}
     * @throws {@link Webflow.ConflictError}
     * @throws {@link Webflow.TooManyRequestsError}
     * @throws {@link Webflow.InternalServerError}
     *
     * @example
     *     await client.collections.items.updateItemLive("580e63fc8c9a982ac9b8b745", "580e64008c9a982ac9b8b754", {
     *             isArchived: false,
     *             isDraft: false,
     *             fieldData: {
     *                 name: "Pan Galactic Gargle Blaster Recipe",
     *                 slug: "pan-galactic-gargle-blaster"
     *             }
     *     })
     */
    public updateItemLive(
        collectionId: string,
        itemId: string,
        request: SchemaOverrides.ItemsUpdateItemLiveRequest,
        requestOptions?: Items.RequestOptions,
    ): core.HttpResponsePromise<Webflow.CollectionItem> {
        return core.HttpResponsePromise.fromPromise(
            this.__updateItemLiveOverride(collectionId, itemId, request, requestOptions),
        );
    }

    private async __updateItemLiveOverride(
        collectionId: string,
        itemId: string,
        request: SchemaOverrides.ItemsUpdateItemLiveRequest,
        requestOptions?: Items.RequestOptions,
    ): Promise<core.WithRawResponse<Webflow.CollectionItem>> {
        const { skipInvalidFiles, ..._body } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        if (skipInvalidFiles != null) {
            _queryParams["skipInvalidFiles"] = skipInvalidFiles.toString();
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    ((await core.Supplier.get(this._options.environment)) ?? environments.WebflowEnvironment.DataApi)
                        .base,
                `collections/${encodeURIComponent(collectionId)}/items/${encodeURIComponent(itemId)}/live`,
            ),
            method: "PATCH",
            headers: mergeHeaders(
                this._options?.headers,
                mergeOnlyDefinedHeaders({ Authorization: await this._getAuthorizationHeader() }),
                requestOptions?.headers,
            ),
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            body: serializers.CollectionItemPatchSingle.jsonOrThrow(_body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                data: serializers.CollectionItem.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    skipValidation: true,
                    breadcrumbsPrefix: ["response"],
                }),
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Webflow.BadRequestError(_response.error.body, _response.rawResponse);
                case 401:
                    throw new Webflow.UnauthorizedError(
                        serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                        _response.rawResponse,
                    );
                case 404:
                    throw new Webflow.NotFoundError(
                        serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                        _response.rawResponse,
                    );
                case 409:
                    throw new Webflow.ConflictError(_response.error.body, _response.rawResponse);
                case 429:
                    throw new Webflow.TooManyRequestsError(
                        serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                        _response.rawResponse,
                    );
                case 500:
                    throw new Webflow.InternalServerError(
                        serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                        _response.rawResponse,
                    );
                default:
                    throw new errors.WebflowError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.WebflowError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.WebflowTimeoutError(
                    "Timeout exceeded when calling PATCH /collections/{collection_id}/items/{item_id}/live.",
                );
            case "unknown":
                throw new errors.WebflowError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }
}

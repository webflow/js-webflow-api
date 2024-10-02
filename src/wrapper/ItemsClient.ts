import urlJoin from "url-join";
import * as Webflow from "../api";
import { Items } from "../api/resources/collections/resources/items/client/Client";
import * as core from "../core";
import * as environments from "../environments";
import * as errors from "../errors";
import * as serializers from "../serialization";

// Client adapts the base client to permit extra properties in
// the client.Collections.Items.createItem, createItemLive, and createItemForMultipleLocales request.
export class Client extends Items {
    constructor(protected readonly _options: Items.Options) {
        super(_options);
    }

    /**
     * Create Item in a Collection.</br></br> To create items across multiple locales, <a href="https://developers.webflow.com/data/reference/create-item-for-multiple-locales"> please use this endpoint.</a> </br></br> Required scope | `CMS:write`
     * @throws {@link Webflow.BadRequestError}
     * @throws {@link Webflow.UnauthorizedError}
     * @throws {@link Webflow.NotFoundError}
     * @throws {@link Webflow.TooManyRequestsError}
     * @throws {@link Webflow.InternalServerError}
     *
     * @example
     *     await webflow.collections.items.createItem("collection_id", {
     *         id: "42b720ef280c7a7a3be8cabe",
     *         cmsLocaleId: "653ad57de882f528b32e810e",
     *         lastPublished: "2022-11-29T16:22:43.159Z",
     *         lastUpdated: "2022-11-17T17:19:43.282Z",
     *         createdOn: "2022-11-17T17:11:57.148Z",
     *         isArchived: false,
     *         isDraft: false,
     *         fieldData: {
     *             name: "Pan Galactic Gargle Blaster Recipe",
     *             slug: "pan-galactic-gargle-blaster"
     *         }
     *     })
     */
    public async createItem(
        collectionId: string,
        request: Webflow.CollectionItem,
        requestOptions?: Items.RequestOptions
    ): Promise<Webflow.CollectionItem> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.WebflowEnvironment.Default,
                `collections/${encodeURIComponent(collectionId)}/items`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "webflow-api",
                "X-Fern-SDK-Version": "2.4.2",
                "User-Agent": "webflow-api/2.4.2",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.CollectionItem.jsonOrThrow(request, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.CollectionItem.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Webflow.BadRequestError(_response.error.body);
                case 401:
                    throw new Webflow.UnauthorizedError(_response.error.body);
                case 404:
                    throw new Webflow.NotFoundError(_response.error.body);
                case 429:
                    throw new Webflow.TooManyRequestsError(
                        serializers.TooManyRequestsErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 500:
                    throw new Webflow.InternalServerError(_response.error.body);
                default:
                    throw new errors.WebflowError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.WebflowError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.WebflowTimeoutError();
            case "unknown":
                throw new errors.WebflowError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Create live Item in a Collection. This Item will be published to the live site. </br></br> To create items across multiple locales, <a href="https://developers.webflow.com/data/reference/create-item-for-multiple-locales"> please use this endpoint.</a> </br></br> Required scope | `CMS:write`
     *
     * @param {string} collectionId - Unique identifier for a Collection
     * @param {Webflow.CollectionItem} request
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
     *         id: "42b720ef280c7a7a3be8cabe",
     *         cmsLocaleId: "653ad57de882f528b32e810e",
     *         lastPublished: "2022-11-29T16:22:43.159Z",
     *         lastUpdated: "2022-11-17T17:19:43.282Z",
     *         createdOn: "2022-11-17T17:11:57.148Z",
     *         isArchived: false,
     *         isDraft: false,
     *         fieldData: {
     *             name: "Pan Galactic Gargle Blaster Recipe",
     *             slug: "pan-galactic-gargle-blaster"
     *         }
     *     })
     */
    public async createItemLive(
        collectionId: string,
        request: Webflow.CollectionItem,
        requestOptions?: Items.RequestOptions
    ): Promise<Webflow.CollectionItem> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.WebflowEnvironment.Default,
                `collections/${encodeURIComponent(collectionId)}/items/live`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "webflow-api",
                "X-Fern-SDK-Version": "2.4.2",
                "User-Agent": "webflow-api/2.4.2",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.CollectionItem.jsonOrThrow(request, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.CollectionItem.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Webflow.BadRequestError(_response.error.body);
                case 401:
                    throw new Webflow.UnauthorizedError(_response.error.body);
                case 404:
                    throw new Webflow.NotFoundError(_response.error.body);
                case 429:
                    throw new Webflow.TooManyRequestsError(
                        serializers.TooManyRequestsErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 500:
                    throw new Webflow.InternalServerError(_response.error.body);
                default:
                    throw new errors.WebflowError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.WebflowError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.WebflowTimeoutError();
            case "unknown":
                throw new errors.WebflowError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Create single Item in a Collection with multiple corresponding locales. </br></br> Required scope | `CMS:write`
     *
     * @param {string} collectionId - Unique identifier for a Collection
     * @param {Webflow.BulkCollectionItem} request
     * @param {Items.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Webflow.BadRequestError}
     * @throws {@link Webflow.UnauthorizedError}
     * @throws {@link Webflow.NotFoundError}
     * @throws {@link Webflow.TooManyRequestsError}
     * @throws {@link Webflow.InternalServerError}
     *
     * @example
     *     await client.collections.items.createItemForMultipleLocales("580e63fc8c9a982ac9b8b745", {
     *         id: "580e64008c9a982ac9b8b754"
     *     })
     */
    public async createItemForMultipleLocales(
        collectionId: string,
        request: Webflow.BulkCollectionItem,
        requestOptions?: Items.RequestOptions
    ): Promise<Webflow.BulkCollectionItem> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.WebflowEnvironment.Default,
                `collections/${encodeURIComponent(collectionId)}/items/bulk`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "webflow-api",
                "X-Fern-SDK-Version": "2.4.2",
                "User-Agent": "webflow-api/2.4.2",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.CollectionItem.jsonOrThrow(request, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.BulkCollectionItem.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Webflow.BadRequestError(_response.error.body);
                case 401:
                    throw new Webflow.UnauthorizedError(_response.error.body);
                case 404:
                    throw new Webflow.NotFoundError(_response.error.body);
                case 429:
                    throw new Webflow.TooManyRequestsError(
                        serializers.TooManyRequestsErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 500:
                    throw new Webflow.InternalServerError(_response.error.body);
                default:
                    throw new errors.WebflowError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.WebflowError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.WebflowTimeoutError();
            case "unknown":
                throw new errors.WebflowError({
                    message: _response.error.errorMessage,
                });
        }
    }
}

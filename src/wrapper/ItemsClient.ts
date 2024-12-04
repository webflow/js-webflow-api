import urlJoin from "url-join";
import * as Webflow from "../api";
import { Items } from "../api/resources/collections/resources/items/client/Client";
import * as core from "../core";
import * as environments from "../environments";
import * as errors from "../errors";
import * as serializers from "../serialization";
import {SDK_VERSION} from "../version";

// Temporary wrapper for backwards compatibility keeping the createItemForMultipleLocales method
// a mirror of the createItems API
export class Client extends Items {
    constructor(protected readonly _options: Items.Options) {
        super(_options);
    }

    /**
     * Create an item or multiple items in a CMS Collection across multiple corresponding locales.
     *
     * **Notes:**
     *
     * - This endpoint can create up to 100 items in a request.
     * - If the `cmsLocaleIds` parameter is undefined or empty and localization is enabled, items will only be created in the primary locale.
     *
     * Required scope | `CMS:write`
     *
     * @param {string} collectionId - Unique identifier for a Collection
     * @param {Webflow.collections.CreateBulkCollectionItemRequestBody} request
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
     *         cmsLocaleIds: ["66f6e966c9e1dc700a857ca3", "66f6e966c9e1dc700a857ca4", "66f6e966c9e1dc700a857ca5"],
     *         isArchived: false,
     *         isDraft: false,
     *         fieldData: {
     *             name: "Don\u2019t Panic",
     *             slug: "dont-panic"
     *         }
     *     })
     *
     * @example
     *     await client.collections.items.createItemForMultipleLocales("580e63fc8c9a982ac9b8b745", {
     *         cmsLocaleIds: ["66f6e966c9e1dc700a857ca3", "66f6e966c9e1dc700a857ca4"],
     *         isArchived: false,
     *         isDraft: false,
     *         fieldData: [{
     *                 name: "Don\u2019t Panic",
     *                 slug: "dont-panic"
     *             }, {
     *                 name: "So Long and Thanks for All the Fish",
     *                 slug: "so-long-and-thanks"
     *             }]
     *     })
     */
    public async createItemForMultipleLocales(
        collectionId: string,
        request: Webflow.collections.CreateBulkCollectionItemRequestBody = {},
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
                "X-Fern-SDK-Version": SDK_VERSION,
                "User-Agent": `webflow-api/${SDK_VERSION}`,
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.collections.CreateBulkCollectionItemRequestBody.jsonOrThrow(request, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
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
                    throw new Webflow.UnauthorizedError(
                        serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 404:
                    throw new Webflow.NotFoundError(
                        serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 429:
                    throw new Webflow.TooManyRequestsError(
                        serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 500:
                    throw new Webflow.InternalServerError(
                        serializers.Error_.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
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
                throw new errors.WebflowTimeoutError(
                    "Timeout exceeded when calling POST /collections/{collection_id}/items/bulk."
                );
            case "unknown":
                throw new errors.WebflowError({
                    message: _response.error.errorMessage,
                });
        }
    }

}
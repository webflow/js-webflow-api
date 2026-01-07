import { Pages } from "../api/resources/pages/client/Client";
import * as core from "../core";
import * as Webflow from "../api";
import * as environments from "../environments";
import * as errors from "../errors";
import * as serializers from "../serialization";
import { mergeHeaders, mergeOnlyDefinedHeaders } from "../core/headers";
import * as SchemaOverrides from "./schemas";

declare module "../api/resources/pages/client/Client" {
    export namespace Pages {}
}

// Client adapts the base client to override extra properties in
// the client.pages.updatePageSettings request.
// Overriding to preserve ability to use `body` in request to prevent breaking change
export class Client extends Pages {
    constructor(protected readonly _options: Pages.Options) {
        super(_options);
    }

    /**
     * Update Page-level metadata, including SEO and Open Graph fields.
     *
     * <Note>
     *   Note: When updating Page Metadata in secondary locales, you may only add `slug` to the request if your Site has the [Advanced or Enterprise Localization](https://webflow.com/localization) add-on.
     * </Note>
     *
     * Required scope | `pages:write`
     *
     * @param {string} pageId - Unique identifier for a Page
     * @param {Webflow.PageMetadataWrite | SchemaOverrides.PageMetadataWriteBody} request
     * @param {Pages.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Webflow.BadRequestError}
     * @throws {@link Webflow.UnauthorizedError}
     * @throws {@link Webflow.NotFoundError}
     * @throws {@link Webflow.TooManyRequestsError}
     * @throws {@link Webflow.InternalServerError}
     *
     * @example
     *     await client.pages.updatePageSettings("63c720f9347c2139b248e552", {
     *         localeId: "65427cf400e02b306eaa04a0",
     *         title: "Guide to the Galaxy",
     *         slug: "guide-to-the-galaxy",
     *         seo: {
     *             title: "The Ultimate Hitchhiker's Guide to the Galaxy",
     *             description: "Everything you need to know about the galaxy, from avoiding Vogon poetry to the importance of towels."
     *         },
     *         openGraph: {
     *             title: "Explore the Cosmos with The Ultimate Guide",
     *             titleCopied: false,
     *             description: "Dive deep into the mysteries of the universe with your guide to everything galactic.",
     *             descriptionCopied: false
     *         }
     *     })
     */
    public updatePageSettings(
        pageId: string,
        request: (Webflow.PageMetadataWrite | SchemaOverrides.PageMetadataWriteBody) = {},
        requestOptions?: Pages.RequestOptions,
    ): core.HttpResponsePromise<Webflow.Page> {
        return core.HttpResponsePromise.fromPromise(this.__updatePageSettingsOverride(pageId, request, requestOptions));
    }

    private async __updatePageSettingsOverride(
        pageId: string,
        request: (Webflow.PageMetadataWrite | SchemaOverrides.PageMetadataWriteBody) = {},
        requestOptions?: Pages.RequestOptions,
    ): Promise<core.WithRawResponse<Webflow.Page>> {
        const { localeId, ..._body } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        if (localeId != null) {
            _queryParams.localeId = localeId;
        }

        const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
            this._options?.headers,
            mergeOnlyDefinedHeaders({ Authorization: await this._getAuthorizationHeader() }),
            requestOptions?.headers,
        );
        const _response = await core.fetcher({
            url: core.url.join(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    ((await core.Supplier.get(this._options.environment)) ?? environments.WebflowEnvironment.DataApi)
                        .base,
                `pages/${core.url.encodePathParam(pageId)}`,
            ),
            method: "PUT",
            headers: _headers,
            contentType: "application/json",
            queryParameters: { ..._queryParams, ...requestOptions?.queryParams },
            requestType: "json",
            body: serializers.PageMetadataWrite.jsonOrThrow(_body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            }),
            timeoutMs: (requestOptions?.timeoutInSeconds ?? this._options?.timeoutInSeconds ?? 60) * 1000,
            maxRetries: requestOptions?.maxRetries ?? this._options?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                data: serializers.Page.parseOrThrow(_response.body, {
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
                throw new errors.WebflowTimeoutError("Timeout exceeded when calling PUT /pages/{page_id}.");
            case "unknown":
                throw new errors.WebflowError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }
}

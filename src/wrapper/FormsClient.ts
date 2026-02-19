import { Forms } from "../api/resources/forms/client/Client";
import * as core from "../core";
import * as Webflow from "../api";
import * as environments from "../environments";
import * as errors from "../errors";
import * as serializers from "../serialization";
import { mergeHeaders, mergeOnlyDefinedHeaders } from "../core/headers";
import urlJoin from "url-join";

declare module "../api/resources/forms/client/Client" {
    export namespace Forms {}
}

// Client adapts the base client to persist a deprecated `listSubmissionsBySite` method.
// Overriding to preserve function and prevent breaking changes.
export class Client extends Forms {
    constructor(protected readonly _options: Forms.Options) {
        super(_options);
    }


    /**
     * @deprecated Use `client.sites.forms.listSubmissionsBySite` instead.
     *
     * List form submissions for a given site. This endpoint differs from the existing [List Form Submissions endpoint](/data/reference/forms/form-submissions/list-submissions) by accepting `siteId` as a path parameter and `elementId` as a query parameter. You can get the `elementId` from the [List forms endpoint](/data/reference/forms/forms/list).
     *
     * Required scope | `forms:read`
     *
     * @param {string} siteId - Unique identifier for a Site
     * @param {Webflow.FormsListSubmissionsBySiteRequest} request
     * @param {Forms.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Webflow.BadRequestError}
     * @throws {@link Webflow.UnauthorizedError}
     * @throws {@link Webflow.ForbiddenError}
     * @throws {@link Webflow.NotFoundError}
     * @throws {@link Webflow.TooManyRequestsError}
     * @throws {@link Webflow.InternalServerError}
     *
     * @example
     *     await client.forms.listSubmissionsBySite("580e63e98c9a982ac9b8b741", {
     *         elementId: "18259716-3e5a-646a-5f41-5dc4b9405aa0",
     *         offset: 1.1,
     *         limit: 1.1
     *     })
     */
    public listSubmissionsBySite(
        siteId: string,
        request: Webflow.sites.FormsListSubmissionsBySiteRequest = {},
        requestOptions?: Forms.RequestOptions,
    ): core.HttpResponsePromise<Webflow.FormSubmissionList> {
        return core.HttpResponsePromise.fromPromise(this.__listSubmissionsBySite(siteId, request, requestOptions));
    }

    private async __listSubmissionsBySite(
      siteId: string,
      request: Webflow.sites.FormsListSubmissionsBySiteRequest = {},
      requestOptions?: Forms.RequestOptions,
  ): Promise<core.WithRawResponse<Webflow.FormSubmissionList>> {
      const { elementId, offset, limit } = request;
      const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
      if (elementId != null) {
          _queryParams.elementId = elementId;
      }

      if (offset != null) {
          _queryParams.offset = offset.toString();
      }

      if (limit != null) {
          _queryParams.limit = limit.toString();
      }

      const _headers: core.Fetcher.Args["headers"] = mergeHeaders(
          this._options?.headers,
          mergeOnlyDefinedHeaders({ Authorization: await this._getAuthorizationHeader() }),
          requestOptions?.headers,
      );
      const _response = await core.fetcher({
          url: urlJoin(
              (await core.Supplier.get(this._options.baseUrl)) ??
                  ((await core.Supplier.get(this._options.environment)) ?? environments.WebflowEnvironment.DataApi)
                      .base,
              `sites/${encodeURIComponent(siteId)}/form_submissions`,
          ),
          method: "GET",
          headers: _headers,
          queryParameters: _queryParams,
          timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
          maxRetries: requestOptions?.maxRetries,
          abortSignal: requestOptions?.abortSignal,
      });
      if (_response.ok) {
          return {
              data: serializers.FormSubmissionList.parseOrThrow(_response.body, {
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
              case 403:
                  throw new Webflow.ForbiddenError(_response.error.body, _response.rawResponse);
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
                  "Timeout exceeded when calling GET /sites/{site_id}/form_submissions.",
              );
          case "unknown":
              throw new errors.WebflowError({
                  message: _response.error.errorMessage,
                  rawResponse: _response.rawResponse,
              });
      }
  }
}
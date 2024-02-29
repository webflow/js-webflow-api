/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Webflow from "../../..";
export declare namespace Orders {
    interface Options {
        environment?: core.Supplier<environments.WebflowEnvironment | string>;
        accessToken: core.Supplier<core.BearerToken>;
    }
    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}
export declare class Orders {
    protected readonly _options: Orders.Options;
    constructor(_options: Orders.Options);
    /**
     * List all orders created for a given site.
     *
     * Required scope | `ecommerce:read`
     * @throws {@link Webflow.BadRequestError}
     * @throws {@link Webflow.UnauthorizedError}
     * @throws {@link Webflow.ForbiddenError}
     * @throws {@link Webflow.NotFoundError}
     * @throws {@link Webflow.ConflictError}
     * @throws {@link Webflow.TooManyRequestsError}
     * @throws {@link Webflow.InternalServerError}
     *
     * @example
     *     await webflow.orders.list("string", {
     *         status: Webflow.OrdersListRequestStatus.Pending
     *     })
     */
    list(siteId: string, request?: Webflow.OrdersListRequest, requestOptions?: Orders.RequestOptions): Promise<Webflow.OrderList>;
    /**
     * Retrieve a single product by its id. All of its SKUs will also be retrieved.
     *
     * Required scope | `ecommerce:read`
     * @throws {@link Webflow.BadRequestError}
     * @throws {@link Webflow.UnauthorizedError}
     * @throws {@link Webflow.ForbiddenError}
     * @throws {@link Webflow.NotFoundError}
     * @throws {@link Webflow.ConflictError}
     * @throws {@link Webflow.TooManyRequestsError}
     * @throws {@link Webflow.InternalServerError}
     *
     * @example
     *     await webflow.orders.get("string", "string")
     */
    get(siteId: string, orderId: string, requestOptions?: Orders.RequestOptions): Promise<Webflow.Order>;
    /**
     * This API lets you update the fields, `comment`, `shippingProvider`, and/or `shippingTracking` for a given order. All three fields can be updated simultaneously or independently.
     *
     * Required scope | `ecommerce:write`
     * @throws {@link Webflow.BadRequestError}
     * @throws {@link Webflow.UnauthorizedError}
     * @throws {@link Webflow.ForbiddenError}
     * @throws {@link Webflow.NotFoundError}
     * @throws {@link Webflow.ConflictError}
     * @throws {@link Webflow.TooManyRequestsError}
     * @throws {@link Webflow.InternalServerError}
     *
     * @example
     *     await webflow.orders.update("string", "string", {
     *         comment: "Example comment to myself",
     *         shippingProvider: "Shipping Company, Co.",
     *         shippingTracking: "tr00000000001",
     *         shippingTrackingUrl: "https://www.shippingcompany.com/tracking/tr00000000001"
     *     })
     */
    update(siteId: string, orderId: string, request?: Webflow.OrdersUpdateRequest, requestOptions?: Orders.RequestOptions): Promise<Webflow.Order>;
    /**
     * Updates an order's status to fulfilled
     *
     * Required scope | `ecommerce:write`
     * @throws {@link Webflow.BadRequestError}
     * @throws {@link Webflow.UnauthorizedError}
     * @throws {@link Webflow.ForbiddenError}
     * @throws {@link Webflow.NotFoundError}
     * @throws {@link Webflow.ConflictError}
     * @throws {@link Webflow.TooManyRequestsError}
     * @throws {@link Webflow.InternalServerError}
     *
     * @example
     *     await webflow.orders.updateFulfill("string", "string", {})
     */
    updateFulfill(siteId: string, orderId: string, request?: Webflow.OrdersUpdateFulfillRequest, requestOptions?: Orders.RequestOptions): Promise<Webflow.Order>;
    /**
     * Updates an order's status to unfulfilled
     *
     * Required scope | `ecommerce:write`
     * @throws {@link Webflow.BadRequestError}
     * @throws {@link Webflow.UnauthorizedError}
     * @throws {@link Webflow.ForbiddenError}
     * @throws {@link Webflow.NotFoundError}
     * @throws {@link Webflow.ConflictError}
     * @throws {@link Webflow.TooManyRequestsError}
     * @throws {@link Webflow.InternalServerError}
     *
     * @example
     *     await webflow.orders.updateUnfulfill("string", "string")
     */
    updateUnfulfill(siteId: string, orderId: string, requestOptions?: Orders.RequestOptions): Promise<Webflow.Order>;
    /**
     * This API will reverse a Stripe charge and refund an order back to a
     * customer. It will also set the order's status to `refunded`.
     *
     * Required scope | `ecommerce:write`
     * @throws {@link Webflow.BadRequestError}
     * @throws {@link Webflow.UnauthorizedError}
     * @throws {@link Webflow.ForbiddenError}
     * @throws {@link Webflow.NotFoundError}
     * @throws {@link Webflow.ConflictError}
     * @throws {@link Webflow.TooManyRequestsError}
     * @throws {@link Webflow.InternalServerError}
     *
     * @example
     *     await webflow.orders.refund("string", "string", {
     *         reason: Webflow.OrdersRefundRequestReason.Duplicate
     *     })
     */
    refund(siteId: string, orderId: string, request?: Webflow.OrdersRefundRequest, requestOptions?: Orders.RequestOptions): Promise<Webflow.Order>;
    protected _getAuthorizationHeader(): Promise<string>;
}

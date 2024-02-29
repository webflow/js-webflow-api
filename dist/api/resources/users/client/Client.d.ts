/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Webflow from "../../..";
export declare namespace Users {
    interface Options {
        environment?: core.Supplier<environments.WebflowEnvironment | string>;
        accessToken: core.Supplier<core.BearerToken>;
    }
    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}
export declare class Users {
    protected readonly _options: Users.Options;
    constructor(_options: Users.Options);
    /**
     * Get a list of users for a site <br><br> Required scope | `users:read`
     * @throws {@link Webflow.BadRequestError}
     * @throws {@link Webflow.UnauthorizedError}
     * @throws {@link Webflow.ForbiddenError}
     * @throws {@link Webflow.NotFoundError}
     * @throws {@link Webflow.TooManyRequestsError}
     * @throws {@link Webflow.InternalServerError}
     *
     * @example
     *     await webflow.users.list("string", {
     *         sort: Webflow.UsersListRequestSort.CreatedOnAscending
     *     })
     */
    list(siteId: string, request?: Webflow.UsersListRequest, requestOptions?: Users.RequestOptions): Promise<Webflow.UserList>;
    /**
     * Get a User by ID <br><br> Required scope | `users:read`
     * @throws {@link Webflow.BadRequestError}
     * @throws {@link Webflow.UnauthorizedError}
     * @throws {@link Webflow.ForbiddenError}
     * @throws {@link Webflow.NotFoundError}
     * @throws {@link Webflow.TooManyRequestsError}
     * @throws {@link Webflow.InternalServerError}
     *
     * @example
     *     await webflow.users.get("string", "string")
     */
    get(siteId: string, userId: string, requestOptions?: Users.RequestOptions): Promise<Webflow.User>;
    /**
     * Delete a User by ID <br><br> Required scope | `users:write`
     * @throws {@link Webflow.BadRequestError}
     * @throws {@link Webflow.UnauthorizedError}
     * @throws {@link Webflow.ForbiddenError}
     * @throws {@link Webflow.NotFoundError}
     * @throws {@link Webflow.TooManyRequestsError}
     * @throws {@link Webflow.InternalServerError}
     *
     * @example
     *     await webflow.users.delete("string", "string")
     */
    delete(siteId: string, userId: string, requestOptions?: Users.RequestOptions): Promise<void>;
    /**
     * Update a User by ID <br><br> Required scope | `users:write`
     *
     * <aside class="notice">The <code>email</code> and <code>password</code> fields cannot be updated using this endpoint</aside>
     * @throws {@link Webflow.BadRequestError}
     * @throws {@link Webflow.UnauthorizedError}
     * @throws {@link Webflow.ForbiddenError}
     * @throws {@link Webflow.NotFoundError}
     * @throws {@link Webflow.TooManyRequestsError}
     * @throws {@link Webflow.InternalServerError}
     *
     * @example
     *     await webflow.users.update("string", "string", {
     *         id: "6287ec36a841b25637c663df",
     *         lastUpdated: new Date("2016-10-24T19:41:29.156Z"),
     *         invitedOn: new Date("2016-10-24T19:41:29.156Z"),
     *         createdOn: new Date("2016-10-24T19:41:29.156Z"),
     *         lastLogin: new Date("2016-10-24T19:41:29.156Z"),
     *         status: Webflow.UserStatus.Invited,
     *         accessGroups: [{
     *                 type: Webflow.UserAccessGroupsItemType.Admin
     *             }],
     *         data: {
     *             data: {}
     *         }
     *     })
     */
    update(siteId: string, userId: string, request: Webflow.User, requestOptions?: Users.RequestOptions): Promise<Webflow.User>;
    /**
     * Create and invite a user with an email address. The user will be sent and invite via email, which they will need to accept in order to join paid Access Groups. <br><br> Required scope | `users:write`
     * @throws {@link Webflow.BadRequestError}
     * @throws {@link Webflow.UnauthorizedError}
     * @throws {@link Webflow.ForbiddenError}
     * @throws {@link Webflow.NotFoundError}
     * @throws {@link Webflow.ConflictError}
     * @throws {@link Webflow.TooManyRequestsError}
     * @throws {@link Webflow.InternalServerError}
     *
     * @example
     *     await webflow.users.invite("string", {
     *         email: "some.one@home.com"
     *     })
     */
    invite(siteId: string, request: Webflow.UsersInviteRequest, requestOptions?: Users.RequestOptions): Promise<Webflow.User>;
    protected _getAuthorizationHeader(): Promise<string>;
}

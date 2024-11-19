/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The type of event that triggered the request
 */
export type UserAccountUpdatedPayloadTriggerType =
    | "user_account_added"
    | "user_account_updated"
    | "user_account_deleted";

export const UserAccountUpdatedPayloadTriggerType = {
    UserAccountAdded: "user_account_added",
    UserAccountUpdated: "user_account_updated",
    UserAccountDeleted: "user_account_deleted",
} as const;

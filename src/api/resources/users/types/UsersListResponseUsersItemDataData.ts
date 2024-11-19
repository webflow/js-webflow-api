/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface UsersListResponseUsersItemDataData {
    /** The name of the user */
    name?: string;
    /** The email address of the user */
    email?: string;
    /** Boolean indicating if the user has accepted the privacy policy */
    acceptPrivacy?: boolean;
    /** Boolean indicating if the user has accepted to receive communications */
    acceptCommunications?: boolean;
    /** Custom user attributes */
    additionalProperties?: string;
}

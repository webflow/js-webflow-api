/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as Webflow from "..";
/**
 * The fields that define the schema for a given Item are based on the Collection that Item belongs to. Beyond the user defined fields, there are a handful of additional fields that are automatically created for all items
 */
export interface User {
    /** Unique identifier for the User */
    id?: string;
    /** Shows whether the user has verified their email address */
    isEmailVerified?: boolean;
    /** The timestamp the user was updated */
    lastUpdated?: Date;
    /** The timestamp the user was invited */
    invitedOn?: Date;
    /** The timestamp the user was created */
    createdOn?: Date;
    /** The timestamp the user was logged in */
    lastLogin?: Date;
    /** The status of the user */
    status?: Webflow.UserStatus;
    /** Access groups the user belongs to */
    accessGroups?: Webflow.UserAccessGroupsItem[];
    data?: Webflow.UserData;
}

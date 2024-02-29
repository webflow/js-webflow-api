/**
 * This file was auto-generated by Fern from our API Definition.
 */
export declare type UsersListRequestSort = 
/**
 * Sorts users in ascending order based on their created date */
"CreatedOn"
/**
 * Sorts users in descending order based on their created date */
 | "-CreatedOn"
/**
 * Sorts users in ascending order based on their email */
 | "Email"
/**
 * Sorts users in descending order based on their email */
 | "-Email"
/**
 * Sorts users in ascending order based on their status */
 | "Status"
/**
 * Sorts users in descending order based on their status */
 | "-Status"
/**
 * Sorts users in ascending order based on their last login date */
 | "LastLogin"
/**
 * Sorts users in descending order based on their last login date */
 | "-LastLogin"
/**
 * Sorts users in ascending order based on their update date */
 | "UpdatedOn"
/**
 * Sorts users in descending order based on their update date */
 | "-UpdatedOn";
export declare const UsersListRequestSort: {
    readonly CreatedOnAscending: "CreatedOn";
    readonly CreatedOnDescending: "-CreatedOn";
    readonly EmailAscending: "Email";
    readonly EmailDescending: "-Email";
    readonly StatusAscending: "Status";
    readonly StatusDescending: "-Status";
    readonly LastLoginAscending: "LastLogin";
    readonly LastLoginDescending: "-LastLogin";
    readonly UpdatedOnAscending: "UpdatedOn";
    readonly UpdatedOnDescending: "-UpdatedOn";
};

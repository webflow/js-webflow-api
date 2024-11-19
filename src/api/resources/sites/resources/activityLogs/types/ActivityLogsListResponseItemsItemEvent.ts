/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type ActivityLogsListResponseItemsItemEvent =
    | "styles_modified"
    | "site_published"
    | "ix2_modified_on_page"
    | "page_dom_modified"
    | "cms_item"
    | "backup_created"
    | "page_custom_code_modified"
    | "symbols_modified"
    | "variable_modified"
    | "variables_modified"
    | "cms_collection"
    | "page_settings_modified"
    | "page_settings_custom_code_modified"
    | "ix2_modified_on_component"
    | "ix2_modified_on_class"
    | "site_custom_code_modified"
    | "page_duplicated"
    | "secondary_locale_page_content_modified"
    | "page_renamed"
    | "page_created"
    | "page_deleted"
    | "site_unpublished"
    | "backup_restored"
    | "locale_added"
    | "branch_created"
    | "locale_display_name_updated"
    | "locale_subdirectory_updated"
    | "branch_merged"
    | "locale_tag_updated"
    | "branch_deleted"
    | "locale_enabled"
    | "locale_removed"
    | "locale_disabled"
    | "library_shared"
    | "library_unshared"
    | "library_installed"
    | "library_uninstalled"
    | "library_update_shared"
    | "library_update_accepted"
    | "branch_review_created"
    | "branch_review_approved"
    | "branch_review_canceled";

export const ActivityLogsListResponseItemsItemEvent = {
    StylesModified: "styles_modified",
    SitePublished: "site_published",
    Ix2ModifiedOnPage: "ix2_modified_on_page",
    PageDomModified: "page_dom_modified",
    CmsItem: "cms_item",
    BackupCreated: "backup_created",
    PageCustomCodeModified: "page_custom_code_modified",
    SymbolsModified: "symbols_modified",
    VariableModified: "variable_modified",
    VariablesModified: "variables_modified",
    CmsCollection: "cms_collection",
    PageSettingsModified: "page_settings_modified",
    PageSettingsCustomCodeModified: "page_settings_custom_code_modified",
    Ix2ModifiedOnComponent: "ix2_modified_on_component",
    Ix2ModifiedOnClass: "ix2_modified_on_class",
    SiteCustomCodeModified: "site_custom_code_modified",
    PageDuplicated: "page_duplicated",
    SecondaryLocalePageContentModified: "secondary_locale_page_content_modified",
    PageRenamed: "page_renamed",
    PageCreated: "page_created",
    PageDeleted: "page_deleted",
    SiteUnpublished: "site_unpublished",
    BackupRestored: "backup_restored",
    LocaleAdded: "locale_added",
    BranchCreated: "branch_created",
    LocaleDisplayNameUpdated: "locale_display_name_updated",
    LocaleSubdirectoryUpdated: "locale_subdirectory_updated",
    BranchMerged: "branch_merged",
    LocaleTagUpdated: "locale_tag_updated",
    BranchDeleted: "branch_deleted",
    LocaleEnabled: "locale_enabled",
    LocaleRemoved: "locale_removed",
    LocaleDisabled: "locale_disabled",
    LibraryShared: "library_shared",
    LibraryUnshared: "library_unshared",
    LibraryInstalled: "library_installed",
    LibraryUninstalled: "library_uninstalled",
    LibraryUpdateShared: "library_update_shared",
    LibraryUpdateAccepted: "library_update_accepted",
    BranchReviewCreated: "branch_review_created",
    BranchReviewApproved: "branch_review_approved",
    BranchReviewCanceled: "branch_review_canceled",
} as const;

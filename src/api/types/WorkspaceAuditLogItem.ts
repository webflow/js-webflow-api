/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Webflow from "../index";

export type WorkspaceAuditLogItem =
    | Webflow.WorkspaceAuditLogItem.UserAccess
    | Webflow.WorkspaceAuditLogItem.CustomRole
    | Webflow.WorkspaceAuditLogItem.WorkspaceMembership
    | Webflow.WorkspaceAuditLogItem.SiteMembership
    | Webflow.WorkspaceAuditLogItem.WorkspaceInvitation;

export declare namespace WorkspaceAuditLogItem {
    interface UserAccess extends Webflow.UserAccessAuditLogItem, _Base {
        eventType: "user_access";
    }

    interface CustomRole extends Webflow.CustomRoleAuditLogItem, _Base {
        eventType: "custom_role";
    }

    interface WorkspaceMembership extends Webflow.WorkspaceMembershipAuditLogItem, _Base {
        eventType: "workspace_membership";
    }

    interface SiteMembership extends Webflow.SiteMembershipAuditLogItem, _Base {
        eventType: "site_membership";
    }

    interface WorkspaceInvitation extends Webflow.WorkspaceInvitationAuditLogItem, _Base {
        eventType: "workspace_invitation";
    }

    interface _Base {
        timestamp?: Date;
        actor?: Webflow.WorkspaceAuditLogItemActor;
        workspace?: Webflow.WorkspaceAuditLogItemWorkspace;
    }
}

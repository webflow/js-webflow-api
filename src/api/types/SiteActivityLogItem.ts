/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Webflow from "../index";

export interface SiteActivityLogItem {
    id?: string;
    createdOn?: Date;
    lastUpdated?: Date;
    event?: Webflow.SiteActivityLogItemEvent;
    resourceOperation?: Webflow.SiteActivityLogItemResourceOperation;
    user?: Webflow.SiteActivityLogItemUser;
    resourceId?: string;
    resourceName?: string;
    newValue?: string;
    previousValue?: string;
    payload?: Record<string, unknown>;
}

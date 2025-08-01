/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Webflow from "../../api/index";
import * as core from "../../core";
import { CommentReplyAuthor } from "./CommentReplyAuthor";
import { CommentReplyMentionedUsersItem } from "./CommentReplyMentionedUsersItem";

export const CommentReply: core.serialization.ObjectSchema<serializers.CommentReply.Raw, Webflow.CommentReply> =
    core.serialization.object({
        id: core.serialization.string(),
        commentId: core.serialization.string(),
        siteId: core.serialization.string(),
        pageId: core.serialization.string(),
        localeId: core.serialization.string().optional(),
        breakpoint: core.serialization.string(),
        content: core.serialization.string(),
        isResolved: core.serialization.boolean(),
        author: CommentReplyAuthor,
        mentionedUsers: core.serialization.list(CommentReplyMentionedUsersItem).optional(),
        lastUpdated: core.serialization.string(),
        createdOn: core.serialization.string(),
    });

export declare namespace CommentReply {
    interface Raw {
        id: string;
        commentId: string;
        siteId: string;
        pageId: string;
        localeId?: string | null;
        breakpoint: string;
        content: string;
        isResolved: boolean;
        author: CommentReplyAuthor.Raw;
        mentionedUsers?: CommentReplyMentionedUsersItem.Raw[] | null;
        lastUpdated: string;
        createdOn: string;
    }
}

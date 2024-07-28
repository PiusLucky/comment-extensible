import React from 'react';

interface CommentRepository {
    addComment(comment: Comment): Promise<Comment>;
    getComments(parentId?: string): Promise<Comment[]>;
    getCommentReplies(parentId: string): Promise<Comment[]>;
    getCommentRepliesCount(parentId: string): Promise<number>;
    updateComment(id: string, content: string): Promise<Comment | null>;
    deleteComment(id: string): Promise<void>;
}
interface Comment {
    id?: string;
    externalIdentifierId?: string;
    parentId?: string;
    content: string;
    author?: string;
    replies?: string[];
    createdAt?: string;
    updatedAt?: string;
}

interface CommentSectionProps {
    commentRepository: CommentRepository;
}
declare const CommentSection: React.FC<CommentSectionProps>;

declare class MongoCommentRepository implements CommentRepository {
    private mongoDBUrl;
    private dbName;
    private collectionName;
    constructor(mongoDBUrl: string, dbName: string, collectionName: string);
    addComment(comment: Comment): Promise<Comment>;
    getComments(parentId?: string): Promise<Comment[]>;
    getCommentReplies(parentId?: string): Promise<Comment[]>;
    getCommentRepliesCount(parentId?: string): Promise<number>;
    updateComment(id: string, content: string): Promise<Comment | null>;
    deleteComment(id: string): Promise<void>;
}

export { CommentSection, MongoCommentRepository };

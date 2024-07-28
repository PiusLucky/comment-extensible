export interface CommentRepository {
  addComment(comment: Comment): Promise<Comment>;
  getComments(parentId?: string): Promise<Comment[]>;
  getCommentReplies(parentId: string): Promise<Comment[]>;
  getCommentRepliesCount(parentId: string): Promise<number>;
  updateComment(id: string, content: string): Promise<Comment | null>;
  deleteComment(id: string): Promise<void>;
}

export interface Comment {
  id?: string;
  externalIdentifierId?: string;
  parentId?: string;
  content: string;
  author?: string;
  replies?: string[]; //IDs of the replies
  createdAt?: string;
  updatedAt?: string;
}

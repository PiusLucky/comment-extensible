import {
  addCommentAction,
  deleteCommentAction,
  getCommentRepliesAction,
  getCommentRepliesCountAction,
  getCommentsAction,
  updateCommentAction,
} from "@/server/actions/MongoCommentRepositoryServerActions";
import { Comment, CommentRepository } from "./CommentRepository";

export class MongoCommentRepository implements CommentRepository {
  private mongoDBUrl: string;
  private dbName: string;
  private collectionName: string;

  constructor(mongoDBUrl: string, dbName: string, collectionName: string) {
    this.mongoDBUrl = mongoDBUrl;
    this.dbName = dbName;
    this.collectionName = collectionName;
  }

  async addComment(comment: Comment): Promise<Comment> {
    const config = {
      mongoDBUrl: this.mongoDBUrl,
      dbName: this.dbName,
      collectionName: this.collectionName,
    };
    return addCommentAction(comment, config);
  }

  async getComments(parentId?: string): Promise<Comment[]> {
    const config = {
      mongoDBUrl: this.mongoDBUrl,
      dbName: this.dbName,
      collectionName: this.collectionName,
    };
    return getCommentsAction(config, parentId);
  }

  async getCommentReplies(parentId?: string): Promise<Comment[]> {
    const config = {
      mongoDBUrl: this.mongoDBUrl,
      dbName: this.dbName,
      collectionName: this.collectionName,
    };
    return getCommentRepliesAction(config, parentId!);
  }

  async getCommentRepliesCount(parentId?: string): Promise<number> {
    const config = {
      mongoDBUrl: this.mongoDBUrl,
      dbName: this.dbName,
      collectionName: this.collectionName,
    };
    return getCommentRepliesCountAction(config, parentId!);
  }

  async updateComment(id: string, content: string): Promise<Comment | null> {
    const config = {
      mongoDBUrl: this.mongoDBUrl,
      dbName: this.dbName,
      collectionName: this.collectionName,
    };
    return updateCommentAction(id, content, config);
  }

  async deleteComment(id: string): Promise<void> {
    const config = {
      mongoDBUrl: this.mongoDBUrl,
      dbName: this.dbName,
      collectionName: this.collectionName,
    };

    return deleteCommentAction(id, config);
  }
}

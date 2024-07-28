import {
  COMMENT_DOES_NOT_EXIST,
  ONE_REPLY_LEVEL_ALLOWED,
} from "@/lib/constant";
import { CommentRepository, Comment } from "./CommentRepository";
import { Pool } from "pg";

export class PostgresCommentRepository implements CommentRepository {
  private pool: Pool;

  constructor(pool: Pool) {
    this.pool = pool;
  }

  async addComment(comment: Comment): Promise<Comment> {
    if (comment.parentId) {
      const parentResult = await this.pool.query(
        "SELECT parentId FROM comments WHERE id = $1",
        [comment.parentId]
      );
      if (parentResult.rows.length > 0 && parentResult.rows[0].parentid) {
        throw new Error(ONE_REPLY_LEVEL_ALLOWED);
      }
    }
    const result = await this.pool.query(
      "INSERT INTO comments (content, author, parent_id, timestamp) VALUES ($1, $2, $3, $4) RETURNING *",
      [comment.content, comment.author, comment.parentId, comment.timestamp]
    );
    return result.rows[0];
  }

  async getComments(parentId?: string): Promise<Comment[]> {
    "use server";
    try {
      const result = await this.pool.query(
        "SELECT * FROM comments WHERE parent_id = $1 OR parent_id IS NULL",
        [parentId || null]
      );
      return result.rows;
    } catch (err) {
      throw new Error(COMMENT_DOES_NOT_EXIST);
    }
  }

  async updateComment(id: string, content: string): Promise<Comment> {
    const result = await this.pool.query(
      "UPDATE comments SET content = $1 WHERE id = $2 RETURNING *",
      [content, id]
    );
    return result.rows[0];
  }

  async deleteComment(id: string): Promise<void> {
    await this.pool.query("DELETE FROM comments WHERE id = $1", [id]);
  }
}

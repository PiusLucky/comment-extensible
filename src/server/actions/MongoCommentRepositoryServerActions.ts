"use server";

import { Comment } from "@/data/CommentRepository";
import { ONE_REPLY_LEVEL_ALLOWED } from "@/lib/constant";
import { ObjectId, WithId } from "mongodb";
import { IMongoConfig } from "../../../types";
import { connectToMongoDatabase } from "../connections/mongo-db-connection";

async function addCommentAction(
  comment: Comment,
  config: IMongoConfig
): Promise<Comment> {
  const { mongoDBUrl, dbName, collectionName } = config;
  const db = await connectToMongoDatabase(mongoDBUrl, dbName);
  if (comment.parentId) {
    const parentComment = await db.collection(collectionName).findOne({
      _id: new ObjectId(comment.parentId),
    });
    if (parentComment && parentComment.parentId) {
      throw new Error(ONE_REPLY_LEVEL_ALLOWED);
    }
  }

  const result = await db.collection(collectionName).insertOne({
    ...comment,
    externalIdentifierId: null,
    createdAt: new Date(),
    updatedAt: new Date(),
    ...(comment.parentId && {
      parentId: comment.parentId,
    }),
  });

  // NOTE: Update the parent comment to push the new comment ID to the replies array
  const newCommentId = result.insertedId.toString();
  if (comment.parentId) {
    await db.collection(collectionName).updateOne(
      { _id: new ObjectId(comment.parentId) },
      //@ts-ignore
      { $push: { replies: newCommentId } }
    );
  }

  return { ...comment, id: result.insertedId.toString() };
}

async function getCommentsAction(
  config: IMongoConfig,
  parentId?: string
): Promise<Comment[]> {
  const { mongoDBUrl, dbName, collectionName } = config;
  const db = await connectToMongoDatabase(mongoDBUrl, dbName);
  const query = parentId ? { parentId } : { parentId: { $exists: false } };
  const comments = await db
    .collection(collectionName)
    .find(query)
    .sort({ createdAt: -1 }) // Sort by createdAt in descending order
    .toArray();

  const formattedComments = comments.map((comment) => ({
    ...comment,
    id: comment._id.toString(),
  }));

  return JSON.parse(JSON.stringify(formattedComments)) as WithId<Comment>[]; // NOTE: Convert to plain object
}

async function getCommentRepliesAction(
  config: IMongoConfig,
  commentId: string
): Promise<Comment[]> {
  const { mongoDBUrl, dbName, collectionName } = config;
  const db = await connectToMongoDatabase(mongoDBUrl, dbName);

  const replies = await db
    .collection(collectionName)
    .find({ parentId: commentId })
    .sort({ createdAt: -1 }) // Sort by createdAt in descending order
    .toArray();

  const updatedReplies = replies.map((reply) => ({
    ...reply,
    id: reply._id.toString(),
  }));

  return JSON.parse(JSON.stringify(updatedReplies)) as WithId<Comment>[];
}

async function getCommentRepliesCountAction(
  config: IMongoConfig,
  commentId: string
): Promise<number> {
  const { mongoDBUrl, dbName, collectionName } = config;
  const db = await connectToMongoDatabase(mongoDBUrl, dbName);

  const replyCount = await db
    .collection(collectionName)
    .find({ parentId: commentId })
    .count();

  return replyCount || 0;
}

async function updateCommentAction(
  id: string,
  content: string,
  config: IMongoConfig
): Promise<Comment | null> {
  const { mongoDBUrl, dbName, collectionName } = config;
  const db = await connectToMongoDatabase(mongoDBUrl, dbName);

  await db
    .collection(collectionName)
    .updateOne(
      { _id: new ObjectId(id) },
      { $set: { content, updatedAt: new Date() } }
    );
  const comment = await db
    .collection(collectionName)
    .findOne({ _id: new ObjectId(id) });

  const result = !comment
    ? null
    : {
        id: comment._id.toString(),
        parentId: comment.parentId?.toString(),
        content: comment.content,
        author: comment.author,
      };
  return result;
}

async function deleteCommentAction(
  id: string,
  config: IMongoConfig
): Promise<void> {
  const { mongoDBUrl, dbName, collectionName } = config;
  const db = await connectToMongoDatabase(mongoDBUrl, dbName);

  await db.collection(collectionName).deleteOne({ _id: new ObjectId(id) });
}

export {
  addCommentAction,
  deleteCommentAction,
  getCommentRepliesAction,
  getCommentRepliesCountAction,
  getCommentsAction,
  updateCommentAction,
};

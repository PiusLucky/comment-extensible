"use client";

import CommentSection from "@/components/sections/CommentSection";
import { MongoCommentRepository } from "@/data/MongoCommentRepository";

export default function Home() {
  const { mongoDBUrl, dbName, collectionName } = {
    mongoDBUrl: "mongodb://localhost:27017",
    dbName: "comment-extensible",
    collectionName: "comment",
  };

  const commentRepository = new MongoCommentRepository(
    mongoDBUrl,
    dbName,
    collectionName
  );

  return <CommentSection commentRepository={commentRepository} />;
}

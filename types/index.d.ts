import { Comment, CommentRepository } from "@/data/CommentRepository";
import React from "react";

interface CommentSectionProps {
  dbType: "postgres" | "mongo";
  dbConfig: PostgresConfig | MongoConfig;
}

interface PostgresConfig {
  user: string;
  host: string;
  database: string;
  password: string;
  port: number;
}

interface MongoConfig {
  uri: string;
  dbName: string;
  collectionName: string;
}

interface IMongoConfig {
  mongoDBUrl: string;
  dbName: string;
  collectionName: string;
}

interface IComment {
  comment: Comment;
  commentRepository: CommentRepository;
  setRefreshKey?: React.Dispatch<React.SetStateAction<number>>;
}

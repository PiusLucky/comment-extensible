"use client";

import { Comment, CommentRepository } from "@/data/CommentRepository";
import React, { useEffect, useState } from "react";

import CommentCard from "../cards/CommentCard";
import AddCommentSection from "./AddCommentSection";
import CommentSkeleton from "../skeletons/CommentSkeleton";

interface CommentSectionProps {
  commentRepository: CommentRepository;
}

const CommentSection: React.FC<CommentSectionProps> = ({
  commentRepository,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [refreshKey, setRefreshKey] = useState(0);
  const [commentsLoading, setCommentLoading] = useState(false);

  useEffect(() => {
    const fetchComments = async () => {
      await commentRepository!
        .getComments()
        .then((dbComments) => {
          setComments(dbComments);
        })
        .catch(() => {});
    };
    fetchComments();
  }, [refreshKey, commentRepository]);

  useEffect(() => {
    setTimeout(() => {
      setIsMounted(true);
    }, 2000);
  }, []);

  return (
    <div className="mx-auto max-w-2xl space-y-6 py-4">
      <AddCommentSection
        commentRepository={commentRepository}
        setRefreshKey={setRefreshKey}
      />
      {!isMounted && (
        <div>
          <CommentSkeleton count={6} />
        </div>
      )}
      {isMounted && comments!.map((comment) => (
        <div className="grid gap-6" key={comment?.id?.toString()}>
          <CommentCard
            comment={comment}
            commentRepository={commentRepository}
            setRefreshKey={setRefreshKey}
          />
        </div>
      ))}
    </div>
  );
};

export default CommentSection;

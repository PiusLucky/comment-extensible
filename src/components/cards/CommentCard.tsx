"use client";

import { Comment } from "@/data/CommentRepository";
import { useState } from "react";
import TimeAgo from "react-timeago";
import { IComment } from "../../../types";
import HeartIcon from "../icons/HeartIcon";
import MessageCircleIcon from "../icons/MessageCircleIcon";
import AddCommentSection from "../sections/AddCommentSection";
import CommentSkeleton from "../skeletons/CommentSkeleton";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import CommentReplyCard from "./CommentReplyCard";

function CommentCard({ comment, commentRepository, setRefreshKey }: IComment) {
  const [replyComment, setReplyComment] = useState(false);
  const [showReply, setShowReply] = useState(false);
  const [replies, setReplies] = useState<Comment[]>([]);
  const [repliesLoading, setRepliesLoading] = useState(false);

  const toggleReplyComment = () => {
    setReplyComment(!replyComment);
  };

  const toggleSeeReplies = async () => {
    setShowReply(!showReply);
    getCommentReplies();
  };

  const getCommentReplies = async () => {
    setRepliesLoading(true);
    await commentRepository
      .getCommentReplies(comment.id!)
      .then((replies: Comment[]) => {
        setReplies(replies);
        setRepliesLoading(false);
      })
      .catch(() => {
        setRepliesLoading(false);
      });
  };

  return (
    <>
      <div className="flex items-start gap-4">
        <Avatar className="h-10 w-10 border">
          <AvatarImage src="/placeholder-user.jpg" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="grid gap-2">
          <div className="flex items-center gap-2">
            <div className="font-medium">Cody Nolte</div>
            <div className="text-xs text-muted-foreground">
              <TimeAgo date={comment.createdAt!} />
            </div>
          </div>
          <p>{comment.content}</p>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <HeartIcon className="h-4 w-4" />
              <span className="sr-only">Like</span>
            </Button>
            {/* TODO: <div className="text-sm text-muted-foreground">12</div> */}
            <Button variant="ghost" size="icon" onClick={toggleReplyComment}>
              <MessageCircleIcon className="h-4 w-4" />
              <span className="sr-only">Reply</span>
            </Button>
            {comment!?.replies!?.length > 0 && (
              <Button
                variant="ghost"
                size="lg"
                onClick={
                  !showReply
                    ? () => {
                        setReplyComment(false);
                        toggleSeeReplies();
                      }
                    : () => setShowReply(!showReply)
                }
              >
                <div className="text-sm text-muted-foreground cursor-pointer text-blue-400 font-semibold select-none">
                  {!showReply ? "See" : "Hide"} Replies (
                  {comment.replies?.length})
                </div>
              </Button>
            )}
          </div>

          {replyComment && (
            <div>
              <AddCommentSection
                commentRepository={commentRepository}
                refreshParent={() => {
                  getCommentReplies();
                  setReplyComment(false);
                  setShowReply(true);

                  if (typeof setRefreshKey === "function") {
                    setRefreshKey(Math.random());
                  }
                }}
                parentId={comment.id?.toString()}
                setShowComponent={setReplyComment}
              />
            </div>
          )}
        </div>
      </div>
      {repliesLoading && <CommentSkeleton count={1} />}
      {showReply &&
        replies?.length > 0 &&
        replies!.map((reply) => (
          <div className="grid gap-6" key={reply?.id?.toString()}>
            <CommentReplyCard
              comment={reply}
              commentRepository={commentRepository}
            />
          </div>
        ))}
    </>
  );
}

export default CommentCard;

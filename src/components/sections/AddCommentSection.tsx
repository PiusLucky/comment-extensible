"use client";

import { Comment, CommentRepository } from "@/data/CommentRepository";
import { useState } from "react";
import MainButton from "../common/MainButton";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

function AddCommentSection({
  commentRepository,
  setRefreshKey,
  setShowComponent,
  refreshParent,
  parentId,
}: {
  commentRepository: CommentRepository;
  setRefreshKey?: React.Dispatch<React.SetStateAction<number>>;
  setShowComponent?: React.Dispatch<React.SetStateAction<boolean>>;
  refreshParent?: Function;
  parentId?: string;
}) {
  const [comment, setComment] = useState("");
  const [addCommentLoading, setAddCommentLoading] = useState(false);

  const handleAddComment = async (comment: Comment) => {
    setAddCommentLoading(true);
    await commentRepository!
      .addComment({ ...comment, parentId: parentId ? parentId : undefined })
      .then(async () => {
        setComment("");
        if (typeof setRefreshKey === "function") {
          setRefreshKey(Math.random());
        }

        if (typeof refreshParent === "function") {
          await refreshParent();
        }
        setAddCommentLoading(false);
      })
      .catch(() => setAddCommentLoading(false));
  };

  return (
    <div className="flex items-start gap-4">
      <Avatar className="h-10 w-10 border">
        <AvatarImage src="/placeholder-user.jpg" />
        <AvatarFallback>YO</AvatarFallback>
      </Avatar>
      <div className="grid gap-2 flex-1">
        <Textarea
          placeholder="Write a comment..."
          className="min-h-[100px] resize-none"
          value={comment}
          onChange={(e) => setComment(e?.target?.value)}
        />
        <div className="flex justify-end gap-2 items-center">
          {parentId && (
            <Button
              variant="ghost"
              onClick={() => {
                if (typeof setShowComponent === "function") {
                  setShowComponent(false);
                }
              }}
            >
              Cancel
            </Button>
          )}
          <MainButton
            text="Post"
            disabled={comment?.length < 2}
            action={() =>
              handleAddComment({
                content: comment,
              })
            }
            isLoading={addCommentLoading}
          />
        </div>
      </div>
    </div>
  );
}

export default AddCommentSection;

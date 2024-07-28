"use client";

import TimeAgo from "react-timeago";
import { IComment } from "../../../types";
import HeartIcon from "../icons/HeartIcon";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

function CommentReplyCard({ comment, commentRepository }: IComment) {
  return (
    <div className="flex items-start gap-4 pl-12">
      <Avatar className="h-10 w-10 border">
        <AvatarImage src="/placeholder-user.jpg" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <div className="grid gap-2">
        <div className="flex items-center gap-2">
          <div className="font-medium">John Doe</div>
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
          {/* TODO: <div className="text-sm text-muted-foreground">8</div> */}
        </div>
      </div>
    </div>
  );
}

export default CommentReplyCard;

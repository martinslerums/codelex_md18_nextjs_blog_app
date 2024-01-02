"use client";

import Button from "@/app/components/Button/Button";
import { useRouter } from "next/navigation";
import { Comment } from "@/app/[id]/BlogCommentsList/BlogCommentsList";

type AdminCommentsPageProps = {
  comments: Comment[];
};

const deleteComment = async (id: string) => {
  const response = await fetch(`http://localhost:3000/api/comments/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(`Failed to delete data: ${response.status}`);
  }

  return response.json();
};

const AdminCommentsPage = ({ comments }: AdminCommentsPageProps) => {
  const router = useRouter();

  return (
    <div>
      {comments &&
        comments.map((comment: Comment) => (
          <div key={comment._id}>
            <h3>{comment.author} </h3>
            <p>{comment.comment} </p>
            <span>{comment.blog.title}</span>
            <br />
            <Button
              type="button"
              onClick={() => {
                deleteComment(comment._id);
                router.refresh();
              }}
              label="Delete Comment"
            />
          </div>
        ))}
    </div>
  );
};

export default AdminCommentsPage;

"use client";

import Button from "@/app/components/Button/Button";
import { useRouter } from "next/navigation";
import { Comment } from "@/types/types";
import Link from "next/link";
import styles from "./AdminComments.module.css"

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
    <div className={styles.container}>
      {comments &&
        comments.map((comment: Comment) => (
          <div key={comment._id} className={styles.wrapper}>
            <div className={styles.commentContent}>  
              <h3 className={styles.author}>{comment.author}</h3>
              <p className={styles.comment}>{comment.comment}</p>
              <Link href={`/${comment.blog._id}`} className={styles.blog}>
                {comment.blog.title}
              </Link>
            </div>
            <div>
              <Button
                size="small"
                type="button"
                onClick={() => {
                  deleteComment(comment._id);
                  router.refresh();
                }}
                label="Delete comment"
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default AdminCommentsPage;

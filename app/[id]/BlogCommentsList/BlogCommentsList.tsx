import { formatDistanceToNow } from "date-fns/formatDistanceToNow";
import { Comment, Params } from "@/types/types";
import styles from "./BlogCommentsList.module.css"

export const getComments = async (id: string) => {
  const response = await fetch(`http://localhost:3000/api/blogs/${id}/comments`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch comments for blog with ID: ${id} Status: ${response.status}`);
  }

  return response.json();
};
  
const BlogCommentsList = async ({ params: { id } }: Params) => {

    const comments = await getComments(id);
  
    return (
      <div className={styles.container}>

        {comments && comments.map((comment: Comment) => (
          <div key={comment._id} className={styles.wrapper}>
              <h3 className={styles.author}>{comment.author}</h3>
              <p className={styles.comment}>{comment.comment}</p>
              <p className={styles.timestamp}>Added {formatDistanceToNow(comment.createdAt)} ago</p>
          </div>
        ))}
        
      </div>
    );
};
 

export default BlogCommentsList;
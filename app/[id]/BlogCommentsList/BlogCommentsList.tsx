import { Comment, Params } from "@/types/types";
import styles from "./BlogCommentsList.module.css"

export const getComments = async (id: string) => {
    console.log("Fetching comments for blog with ID AGAIN: ", id); 
  
    const response = await fetch(`http://localhost:3000/api/blogs/${id}/comments`, {
      cache: "no-store",
    });
  
    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }
    return response.json();
  };
  

const BlogCommentsList = async ({ params: { id } }: Params) => {

    const comments = await getComments(id);
    console.log("Blog comments: ", comments);

    return (
      <div className={styles.container}>
        {comments && comments.map((comment: Comment) => (
          <div key={comment._id} className={styles.wrapper}>
              <h3>{comment.author}</h3>
              <p>{comment.comment}</p>
          </div>
        ))}
      </div>
    );
};
 

export default BlogCommentsList;
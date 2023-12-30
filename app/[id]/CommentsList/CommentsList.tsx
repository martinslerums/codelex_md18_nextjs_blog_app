export type Comment = {
    _id: string,
    author: string,
    comment: string,
    blog: {
      title: string,
    }
  }

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
  

  const CommentsList = async ({ params }: { params: { id: string } }) => {
    const comments = await getComments(params.id);
    console.log("Blog comments: ", comments);


    return (
        <div>
            {comments &&
                comments.map((comment: Comment) => (
                    <div key={comment._id}>
                        <span>Author: {comment.author}</span>
                        <p>Comment: {comment.comment}</p>
                    </div>
                ))}
        </div>
    );
};
 
export default CommentsList;
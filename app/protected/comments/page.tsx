"use client"

import { Comment } from "@/app/[id]/CommentsList/CommentsList";
import Button from "@/app/components/Button/Button";
import { useRouter } from "next/navigation";
import { use } from "react"


const GetExistingComments = async () => {
    const response = await fetch("http://localhost:3000/api/comments", {
        cache: "no-store",
      });

    if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status}`);
      }
    return response.json();
}

const deleteComment = async (id: string) => {
    const response = await fetch(`http://localhost:3000/api/comments/${id}`,{
          method: "DELETE",
          cache: "no-store",
        })

        if(!response.ok) {
            throw new Error(`Failed to delete data: ${response.status}`)
          }

    return response.json()

}

const ProtectedComments = () => {
    const comments = use(GetExistingComments());
    const router = useRouter()

    // const [commentsArray, setCommentsArray] = useState<Comment[]>(comments)
    
    // useEffect(() => {
    // GetExistingComments();
    // }, [])

    return ( 
        <div>
           {comments && comments.map((comment: Comment) => (
                <div key={comment._id}>
                    <h3>{comment.author} </h3>
                    <p>{comment.comment} </p>
                    <span>{comment.blog.title}</span>
                    <br />  
                   <Button 
                       type="button"
                       onClick={() => {
                        deleteComment(comment._id);
                        router.refresh()
                    }} 
                       label="Delete Comment"
                    />
                </div>
            ))}
        </div>
     );
}
 
export default ProtectedComments;
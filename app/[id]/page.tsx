import Image from "next/image";
import CommentsForm from "../components/CommentsForm/CommentsForm";

type Comment = {
  id: string,
  author: string,
  comment: string
}

const getDataById = async (id: string) => {
  console.log("Fetching data for blog with ID: ", id);

  const response = await fetch(`http://localhost:3000/api/blogs/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch data. Status: ${response.status}`);
  }
  return response.json();
};

const getComments = async (id: string) => {
  console.log("Fetching comments for blog with ID: ", id);

  const response = await fetch(`http://localhost:3000/api/blogs/${id}/comments`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch data. Status: ${response.status}`);
  }
  return response.json();
};

const BlogDetails = async ({ params }: { params: { id: string } }) => {

  console.log("Params Object: ", params);
  const data = await getDataById(params.id);
  console.log("Received data here:", data);
  const comments = await getComments(params.id)
  console.log("Blog comments: ", comments)

  return (
    <main>
      <div>
        <h2>{data.title}</h2>
        <Image src={data.imageUrl} alt="photo" width={150} height={150}></Image>
        <p>{data.body}</p>
      </div>
      <div>
        <CommentsForm/>
      </div>
    {comments && comments.map((comment: Comment) => (
      <div key={comment.id}>
          <span>Author: {comment.author}</span>
          <p>Comment: {comment.comment}</p>
      </div>
    ))}
    </main>
  );
};

export default BlogDetails;

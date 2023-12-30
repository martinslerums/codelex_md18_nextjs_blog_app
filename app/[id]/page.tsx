import Image from "next/image";
import CommentsForm from "./CommentsForm/CommentsForm";
import CommentsList from "./CommentsList/CommentsList";

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

const BlogDetails = async ({ params }: { params: { id: string } }) => {
  
  console.log("Params Object: ", params);
  const data = await getDataById(params.id);
  console.log("Received data here:", data);

  return (
    <main>
      <div>
        <Image src={data.imageUrl} alt="photo" width={350} height={350}></Image>
        <h2>{data.title}</h2>
        <p>{data.body}</p>
      </div>
      <CommentsForm />
      <CommentsList params={params} />
    </main>
  );
};

export default BlogDetails;

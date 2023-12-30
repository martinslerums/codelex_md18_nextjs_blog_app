import Image from "next/image";

type Params = {
  params: {
    id: string
  }
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

const BlogDetails = async ({ params: { id } }: Params) => {
  console.log("Params Object: ", id);
  const data = await getDataById(id);
  console.log("Received data here:", data);

  return (
    <div>
      <Image src={data.imageUrl} alt="photo" width={350} height={350}></Image>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </div>
  );
};

export default BlogDetails;

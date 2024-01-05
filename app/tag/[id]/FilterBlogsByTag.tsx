import { Blog, Params } from "@/types/types";
import Image from "next/image";

const getBlogsByTag = async (id: string) => {  
  
  const response = await fetch(`http://localhost:3000/api/tags/${id}`, {
    next: {
      revalidate: 30
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch data. Status: ${response.status}`);
  }
  return response.json();
};


const FilterBlogsByTag = async ({ params: { id } }: Params) => {

  const blogs = await getBlogsByTag(id);

  return (
    blogs && blogs.map((blog: Blog) => (
      <div key={blog._id}>
        <Image src={blog.imageUrl} alt="photo" width={500} height={350}></Image>
        <h2 >{blog.title}</h2>
        <span>{blog.blogTag.name}</span>
      </div>
    ))
  );
}
 
export default FilterBlogsByTag;
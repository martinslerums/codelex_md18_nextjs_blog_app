import styles from "./BlogDetails.module.css"
import { Blog, Params } from "@/types/types";
import Image from "next/image";


export const generateStaticParams = async () => {

  const response = await fetch("http://localhost:3000/api/blogs")

  const blogs = await response.json()

  return blogs.map((blog: Blog) => ({
    id: blog._id
  }))
}

const getBlog = async (id: string) => {  console.log("Fetching data for blog with ID: ", id);

  const response = await fetch(`http://localhost:3000/api/blogs/${id}`, {
    next: {
      revalidate: 30
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch data. Status: ${response.status}`);
  }
  return response.json();
};

const BlogDetails = async ({ params: { id } }: Params) => {

  console.log("Params Object: ", id);

  const blog = await getBlog(id);
  console.log("Received blog here:", blog);

  return (
    <div className={styles.wrapper}>
      <Image src={blog.imageUrl} alt="photo" width={500} height={350}></Image>
      <h2 className={styles.title}>{blog.title}</h2>
      <p className={styles.paragraph}>{blog.body}</p>
    </div>
  );
};

export default BlogDetails;

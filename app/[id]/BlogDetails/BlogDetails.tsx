import { Params } from "@/types/types";
import Image from "next/image";
import parse from 'html-react-parser';
import styles from "./BlogDetails.module.css"

const getBlog = async (id: string) => {  
  const response = await fetch(`http://localhost:3000/api/blogs/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch blog with ID: ${id}. Status: ${response.status}`);
  }

  return response.json();
};

const BlogDetails = async ({ params: { id } }: Params) => {

  const blog = await getBlog(id);

  return (
    <div className={styles.container}>
      
      <Image src={blog.imageUrl} alt="photo" width={1000} height={800} className={styles.image} priority/>
      <h1 className={styles.title}>{blog.title}</h1>
      <div className={styles.body}>{parse(blog.body)}</div>

    </div>
  );
};

export default BlogDetails;


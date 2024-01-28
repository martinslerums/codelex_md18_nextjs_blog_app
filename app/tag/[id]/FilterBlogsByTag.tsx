import { Blog, Params } from "@/types/types";
import Image from "next/image";
import styles from "./FilterBlogsByTag.module.css"
import Link from "next/link";

const getBlogsByTag = async (id: string) => {  
  const response = await fetch(`http://localhost:3000/api/tags/${id}`, {
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch data. Status: ${response.status}`);
  }

  return response.json();
};

const FilterBlogsByTag = async ({ params: { id } }: Params) => {
  const blogs = await getBlogsByTag(id);

  return (
    <main className={styles.container}>
      {blogs && blogs.map((blog: Blog) => (
        <div key={blog._id}>
          <Link className={styles.link} href={`/${blog._id}`}>
            <Image src={blog.imageUrl} alt="photo" width={380} height={260} className={styles.image} priority />
            <h2 >{blog.title}</h2>
          </Link>
        </div>
      ))}
    </main>   
  );
};
 
export default FilterBlogsByTag;
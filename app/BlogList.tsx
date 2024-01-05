"use client"

import Image from "next/image";
import Link from "next/link";
import { Session } from "next-auth";
import { Blog } from "@/types/types";
import { useRouter } from "next/navigation";
import Button from "./components/Button/Button";
import styles from "./BlogList.module.css";
import parse from 'html-react-parser';


type BlogListProps = {
  blogs: Blog[]
  isSession: Session | null
}

const handleDelete = async (id: string) => {
  const response = await fetch(`http://localhost:3000/api/blogs/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(`Failed to delete data: ${response.status}`);
  }
  
  return response.json();
}



export const BlogsList =  ({blogs, isSession}: BlogListProps) => {

  const router = useRouter();

return (
  <div className={styles.container}>
    {blogs && blogs.map((blog: Blog) =>
        isSession ? (
          <div key={blog._id} className={styles.blog}>

            <Link className={styles.link} href={`/${blog._id}`}>
              <Image src={blog.imageUrl} width={440} height={200} alt="Photo" priority/>
              <h3 className={styles.title}>{`${blog.title}`}</h3>
              <div className={styles.paragraphWrapper}>{parse(blog.body.slice(0, 400).concat("..."))}  </div>
            </Link>
            <div className={styles.tagWrapper}>
             <Link href={`/tag/${blog.blogTag._id}`} className={styles.tag}> {blog.blogTag?.name} </Link>
            </div>
           
            <div className={styles.buttonWrapper}>
              <Button type="button" label="Delete blog" onClick={() => { 
                handleDelete(blog._id)
                router.refresh()
                }}/>
              <Button type="button" label="Edit blog"  />
            </div>

          </div>
        ) : (
          <div key={blog._id} className={styles.blog}>
           <Link className={styles.link} href={`/${blog._id}`}>
            <Image src={blog.imageUrl} width={380} height={260} alt="Photo" priority/>
              <h3 className={styles.title}>{`${blog.title}`}</h3>
              <div className={styles.paragraphWrapper}>{parse(blog.body.slice(0, 400))}...</div>
            </Link>
            <div className={styles.tagWrapper}>
             <Link href={`/tag/${blog.blogTag._id}`} className={styles.tag}> {blog.blogTag?.name} </Link>
            </div>
          </div>
        )
      )}
  </div>  
  )
} 



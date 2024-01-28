import Image from "next/image";
import Link from "next/link";
import { Blog, Comment } from "@/types/types";
import styles from "./BlogList.module.css";
import parse from 'html-react-parser';
import DeleteButton from "./components/DeleteButton/DeleteButton";
import EditButton from "./components/EditButton/Editbutton";
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';

const getBlogs = async () => {
  const response = await fetch("http://localhost:3000/api/blogs", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch blogs from route-handler");
  }

  return response.json();
};

const getComments = async () => {
  const response = await fetch("http://localhost:3000/api/comments", {
      cache: "no-store",
    });

  if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }

  return response.json();
};

export const BlogsList = async () => {

  const blogs = await getBlogs() 
  const session = await getServerSession(authOptions);
  const comments = await getComments()

return (
  <main className={styles.container}>
    {blogs && blogs.map((blog: Blog) =>
        session ? (
          <div key={blog._id} className={styles.blog}>
            <Link className={styles.link} href={`/${blog._id}`}>
              <Image src={blog.imageUrl} width={380} height={260} alt="Photo" priority className={styles.image}/>
            </Link>
            <div className={styles.tagWrapper}>
                <Link href={`/tag/${blog.blogTag._id}`} className={styles.tag}> {blog.blogTag.name} </Link>
            </div>
            <Link className={styles.link} href={`/${blog._id}`}>
              <h1 className={styles.title}>
                {`${blog.title} (${comments ? comments.filter((comment: Comment) => comment.blog._id === blog._id).length : 0})`}
              </h1>
            </Link>
            <div className={styles.linethrough}></div>
            <div className={styles.buttonWrapper}>
              <DeleteButton id={blog._id} />
              <EditButton id={blog._id} />
            </div>
          </div>
        ) : (
          <div key={blog._id} className={styles.blog}>
            <Link className={styles.link} href={`/${blog._id}`}>
              <Image src={blog.imageUrl} width={380} height={260} alt="Photo" priority className={styles.image}/>
            </Link>
            <div className={styles.tagWrapper}>
                <Link href={`/tag/${blog.blogTag._id}`} className={styles.tag}> {blog.blogTag.name} </Link>
            </div>
            <Link className={styles.link} href={`/${blog._id}`}>
              <h1 className={styles.title}>
                {`${blog.title} (${comments ? comments.filter((comment: Comment) => comment.blog._id === blog._id).length : 0})`}
              </h1>
            </Link>
            <div className={styles.linethrough}></div>
          </div>
        )
      )}
  </main> 
  )
} 
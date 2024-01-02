import { authOptions } from "./api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { Blog } from "@/types/types";
import styles from "./BlogList.module.css";
import Button from "./components/Button/Button";
import Image from "next/image";
import Link from "next/link";


const getBlogs = async () => {
  const response = await fetch("http://localhost:3000/api/blogs", {
    next: { revalidate: 0 },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

export const BlogsList = async () => {
  
  const session = await getServerSession(authOptions);
  const data = await getBlogs();
  // console.log(data)

  return (
    <div className={styles.container}>
      {data && data.map((blog: Blog) =>
          session ? (
            <div key={blog._id} className={styles.blog}>
              <Link className={styles.link} href={`/${blog._id}`}>
              <Image src={blog.imageUrl} width={400} height={250} alt="Photo"/>
                <h3 className={styles.title}>{`${blog.title}`}</h3>
                <div className={styles.paragraphWrapper}>
                  <p className={styles.paragraph}>{blog.body}</p>
                </div>
              </Link>
              <span className={styles.tag}>{blog.blogTag.name}</span>
              <Button type="button" label="Did it work?" />
            </div>
          ) : (
            <div key={blog._id} className={styles.blog}>
              <Link className={styles.link} href={`/${blog._id}`}>
                <Image src={blog.imageUrl} width={150} height={150} alt="Photo"/>
                <h3 className={styles.title}>{blog.title}</h3>
                <div className={styles.paragraphWrapper}>
                  <p className={styles.paragraph}>{blog.body}</p>
                </div>
              </Link>
              <span className={styles.tag}>{blog.blogTag.name}</span>
            </div>
          )
        )}
    </div>
  );
};

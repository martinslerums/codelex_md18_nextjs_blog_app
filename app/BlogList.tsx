import { authOptions } from "./api/auth/[...nextauth]/route";
import { Session, getServerSession } from "next-auth";
import { Blog } from "@/types/types";
import styles from "./BlogList.module.css";
import Button from "./components/Button/Button";
import Image from "next/image";
import Link from "next/link";

type BlogListProps = {
  blogs: Blog[]
  isSession: Session | null
}

export const BlogsList =  ({blogs, isSession}: BlogListProps) => {

  return (
    <div className={styles.container}>
      {blogs && blogs.map((blog: Blog) =>
          isSession ? (
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

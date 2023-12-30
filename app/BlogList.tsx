import { getServerSession } from "next-auth";
import styles from "./BlogList.module.css"
import Image from "next/image";
import Link from "next/link";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Button from "./components/Button/Button";

type Blog = {
    _id: string,
    title: string,
    imageUrl: string,
    body: string,
    tag: {
      name: string;
    }
}

const getData = async () => {
  const response = await fetch("http://localhost:3000/api/blogs", {
    next: { revalidate: 0 }
  });
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

export const BlogsList = async () => {
  
  const data = await getData();
//   console.log(data);7
  const session = await getServerSession(authOptions);



  return (
    <div className={styles.container} >
      {data &&
        data.map((blog: Blog) => (
          (session) ? (
          <div key={blog._id} className={styles.blogCard}>
            <Link href={`/${blog._id}`}>
                <Image src={blog.imageUrl} width={150} height={150} alt="Photo" />
                <h3>{blog.title}</h3>
                <div>
                <p>{blog.body}</p>
                </div>
            </Link>
            <span>{blog.tag.name}</span>
            <Button type={"button"} label="Did it work?" />
          </div>
          ) : (
            <div key={blog._id} className={styles.blogCard}>
            <Link href={`/${blog._id}`}>
                <Image src={blog.imageUrl} width={150} height={150} alt="Photo" />
                <h3>{blog.title}</h3>
                <div>
                <p>{blog.body}</p>
                </div>
            </Link>
            <span>{blog.tag.name}</span>
          </div>
          )
        ))}
    </div>
  );
};

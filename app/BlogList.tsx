import styles from "./BlogList.module.css"
import Image from "next/image";
import Link from "next/link";

type Blog = {
    _id: string,
    title: string,
    imageUrl: string,
    body: string
}

const getData = async () => {
  const response = await fetch("http://localhost:3000/api/blogs", {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

export const Blogs = async () => {
  const data = await getData();
//   console.log(data);

  return (
    <div className={styles.container} >
      {data &&
        data.map((blog: Blog) => (
          <div key={blog._id} className={styles.blogCard}>
            <Link href={`/${blog._id}`}>
                <h3>{blog.title}</h3>
                <Image src={blog.imageUrl} width={150} height={150} alt="Photo" />
                <div>
                <p>{blog.body}</p>
                </div>
            </Link>
          </div>
        ))}
    </div>
  );
};

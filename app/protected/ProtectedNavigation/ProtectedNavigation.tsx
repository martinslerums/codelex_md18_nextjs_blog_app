import Link from "next/link";
import styles from "./ProtectedNavigation.module.css";

const ProtectedNavigation = () => {
  return (
    <div className={styles.wrapper}>
      <Link className={styles.link} href={"/protected/blogs"}>
        All blogs
      </Link>
      <Link className={styles.link} href={"/protected/comments"}>
        All comments
      </Link>
      <Link className={styles.link} href={"/protected/create"}>
        Create a blog
      </Link>
    </div>
  );
};

export default ProtectedNavigation;

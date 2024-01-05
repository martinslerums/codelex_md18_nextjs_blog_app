import Link from "next/link";
import styles from "./Navbar.module.css";
import SignOutButton from "../SignOutButton/SignOutButton";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";


export const Navbar = async () => {
  const session = await getServerSession(authOptions);


  return session ? (
    <nav className={styles.nav}>
      <div className={styles.navItem}>
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
      <div className={styles.navItem}>
        <span className={styles.admin}> Loged-in as {session.user?.username}</span>
        <SignOutButton />
      </div>

    </nav>
  ) : (
    <nav className={styles.nav}>
      <Link className={styles.link} href={"/"}>
        All blogs
      </Link>
    </nav>
  );
};

// paths ? (
//   <Link href={'/protected/comments'}>All comments</Link>
//   <SignOutButton />
// ) : (
//   <Link href={'/protected/blogs'}>All blogs</Link>
//   <SignOutButton />
// )

// session ? (

//   (url === "/protected") ? (
//     <nav className={styles.nav}>
//       <SignOutButton />
//     </nav>
//   ) : (
//     <nav className={styles.nav}>
//       <Link className={styles.link} href={'/protected/blogs'}>All blogs</Link>
//       <Link className={styles.link} href={'/protected/comments'}>All comments</Link>
//       <Link className={styles.link} href={'/protected/create'}>Create a blog</Link>
//       <SignOutButton />
//     </nav>
//   )
// ) : (
// <nav className={styles.nav}>
//   <Link className={styles.link} href={'/'}>All blogs</Link>
// </nav>
// )

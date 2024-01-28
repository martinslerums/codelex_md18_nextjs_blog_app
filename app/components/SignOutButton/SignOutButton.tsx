"use client"

import { signOut } from "next-auth/react";
import styles from "./SignOutbutton.module.css"
import { useRouter } from "next/navigation";


const SignOutButton = () => {

    const router = useRouter();

    return (
        <button  
            onClick={ async () => {
                 await signOut()
                 router.push("/")
                 }}
            className={styles.button}
        >
        </button>
    )
}

export default SignOutButton
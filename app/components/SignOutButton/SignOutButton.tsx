"use client"

import { signOut } from "next-auth/react";
import styles from "./SignOutbutton.module.css"


const SignOutButton = () => {
    return (
        <button 
            onClick={() => signOut()}
            className={styles.button}
        >
        </button>
    )
}

export default SignOutButton
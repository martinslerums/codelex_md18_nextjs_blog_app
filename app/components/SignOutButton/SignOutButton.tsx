"use client"

import { signOut } from "next-auth/react";

const SignOutButton = () => {
    return (
        <button 
            onClick={() => signOut()}
            className="btn btn-secondary"
        >
                Sign Out
        </button>
    )
}

export default SignOutButton
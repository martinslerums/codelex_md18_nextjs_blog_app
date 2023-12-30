import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { loginUser } from "@/libs/services/auth";
import { NextApiHandler } from "next";

type Credentials = {
  username: string;
  password: string;
};

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({

      name: "credentials",

      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        const {username, password} = credentials as Credentials
        
        const user = await loginUser({username, password})

        return user
      },
    }),
  ],

  //pages{signIn: "/customSignInPage"} for custom sign in.

  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: "jwt",
  },

  jwt: {
    maxAge: 7 * 24 * 60 * 60 // Kept for 7 days
  },

  callbacks: {
    async jwt({token, user} ) {
        if (user) {
            token.user = user;
        }
        return token;
    },

    async session({ session, token }) {
        if (token.user) {
          session.user = {
            ...token.user,
            password: undefined,
          }
        } 
        return session
      }
  }
};

const handler: NextApiHandler = NextAuth(authOptions)

export { handler as GET, handler as POST }

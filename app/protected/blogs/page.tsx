import { BlogsList } from "@/app/BlogList";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Blog } from "@/types/types";
import { getServerSession } from "next-auth";


const ProtectedBlogs = async () => {
  const blogs = await getBlogs()
  const session = await getServerSession(authOptions)
    
    return ( 
        <BlogsList blogs={blogs} isSession={session}/>
     );
}
 
export default ProtectedBlogs;


const getBlogs = async () => {

  const response = await fetch("http://localhost:3000/api/blogs", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch blogs from route-handler");
  }

  return response.json();

};

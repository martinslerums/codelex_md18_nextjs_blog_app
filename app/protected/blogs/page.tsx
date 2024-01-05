import { BlogsList } from "@/app/BlogList";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

const getBlogs = async () => {

    const response = await fetch("http://localhost:3000/api/blogs", {
      next: { revalidate: 0 },
    });
  
    if (!response.ok) {
      throw new Error("Failed to fetch blogs from route-handler");
    }
  
    return response.json();
  
  };

const ProtectedBlogs = async () => {
  const blogs = await getBlogs()
  const session = await getServerSession(authOptions)
    
    return ( 
        <BlogsList blogs={blogs} isSession={session}/>
     );
}
 
export default ProtectedBlogs;
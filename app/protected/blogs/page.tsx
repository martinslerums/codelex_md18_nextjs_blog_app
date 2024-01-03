import { BlogsList } from "@/app/BlogList";


const getBlogs = async () => {

    const response = await fetch("http://localhost:3000/api/blogs", {
      next: { revalidate: 30 },
    });
  
    if (!response.ok) {
      throw new Error("Failed to fetch blogs from route-handler");
    }
  
    return response.json();
  
  };

const ProtectedBlogs = () => {
    
    return ( 
        <BlogsList />
     );
}
 
export default ProtectedBlogs;
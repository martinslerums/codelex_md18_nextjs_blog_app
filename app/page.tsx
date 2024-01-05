import { getServerSession } from 'next-auth';
import { BlogsList } from './BlogList'
import { authOptions } from './api/auth/[...nextauth]/route';


const getBlogs = async () => {

  const response = await fetch("http://localhost:3000/api/blogs", {
    next: { revalidate: 0 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch blogs from route-handler");
  }

  return response.json();

};

const  Home =  async () => {
  const blogs = await getBlogs() 
  const session = await getServerSession(authOptions);

  return (
    <main>
      <BlogsList blogs={blogs} isSession={session} /> 
    </main>
  )
}

export default Home
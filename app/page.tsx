import { BlogsList } from './BlogList'


// const getBlogs = async () => {

//   const response = await fetch("http://localhost:3000/api/blogs", {
//     next: { revalidate: 0 },
//   });

//   if (!response.ok) {
//     throw new Error("Failed to fetch blogs from route-handler");
//   }

//   return response.json();

// };

const  Home =  () => {
  // const blogs = await getBlogs() //blogs={blogs} 

  return (
    <main>
      <BlogsList /> 
    </main>
  )
}

export default Home
import { Params } from "@/types/types";
import EditBlogForm from "./EditBlogForm";

const getBlog = async (id: string) => {  
  const response = await fetch(`http://localhost:3000/api/blogs/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch data. Status: ${response.status}`);
  }

  return response.json();
};

const Edit = async ({params: {id}}: Params) => {
  const editedBlog = await getBlog(id)

  return ( 
      <EditBlogForm data={editedBlog} id={id}/>
   );
};
 
export default Edit;


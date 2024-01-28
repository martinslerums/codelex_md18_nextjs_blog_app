import AdminCommentsPage from "./AdminCommentsPage";

const getComments = async () => {
    const response = await fetch("http://localhost:3000/api/comments", {
        cache: "no-store",
      });

    if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status}`);
      }

    return response.json();
};

const ProtectedComments = async () => {
  const comments = await getComments();
   
  return ( 
    <AdminCommentsPage comments={comments}/>
  );
};
 
export default ProtectedComments;
import { Params } from "@/types/types";
import BlogCommentsForm from "./BlogCommentsForm/BlogCommentsForm";
import BlogCommentsList from "./BlogCommentsList/BlogCommentsList";
import BlogDetails from "./BlogDetails/BlogDetails";


//Kādēļ nevar izmantot  { params: { id } }: Params ???
const IndividualBlogView = ({ params }: Params) => {
  return (
    <main>
      <BlogDetails params={params}/>
      <BlogCommentsForm params={params} />
      <BlogCommentsList params={params} />
    </main>
  );
};

export default IndividualBlogView;

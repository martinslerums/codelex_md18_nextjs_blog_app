import { Params } from "@/types/types";
import BlogCommentsForm from "./BlogCommentsForm/BlogCommentsForm";
import BlogCommentsList from "./BlogCommentsList/BlogCommentsList";
import BlogDetails from "./BlogDetails/BlogDetails";

const IndividualBlogView = ({ params }: Params) => {
  return (
    <main className="blogDetails">
      <BlogDetails params={params}/>
      <BlogCommentsForm params={params} />
      <BlogCommentsList params={params} />
    </main>
  );
};

export default IndividualBlogView;

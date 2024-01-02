import mongoose from "mongoose";
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: String,
  imageUrl: String,
  body: String,
  blogTag: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "BlogTag",
  },  
},
{
  timestamps: true,
});

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

export default Blog;











// const tagsSchema = new Schema({
//   name: String,
// });

// export const Tag = mongoose.models.Tag || mongoose.model("Tag", tagsSchema);
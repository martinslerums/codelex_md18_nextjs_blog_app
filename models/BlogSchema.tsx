import mongoose from "mongoose";

const { Schema } = mongoose;

const blogSchema = new Schema({
  title: String,
  imageUrl: String,
  body: String,
  tag: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tag",
  },
});

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

export default Blog;

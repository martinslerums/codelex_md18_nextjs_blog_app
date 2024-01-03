import mongoose from "mongoose";
const { Schema } = mongoose;

const blogTagSchema = new Schema({
  name: String,
},
{
  timestamps: true,
})

const BlogTag = mongoose.models.BlogTag || mongoose.model("BlogTag", blogTagSchema);

export default BlogTag



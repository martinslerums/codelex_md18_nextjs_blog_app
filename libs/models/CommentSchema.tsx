import mongoose from "mongoose";
const { Schema } = mongoose;

const commentSchema = new Schema({
  author: String,
  comment: String,
  blog: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Blog",
    },
},
{
  timestamps: true,
});

const Comment = mongoose.models.Comment || mongoose.model("Comment", commentSchema);

export default Comment;

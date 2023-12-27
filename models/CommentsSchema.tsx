import mongoose from 'mongoose';

const { Schema } = mongoose;

const commentsSchema = new Schema(
  {
    author: String,
    comment: String,
    blog: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Blog',
    },
  }
);

const Comment = mongoose.models.Comment || mongoose.model('Comment', commentsSchema);

export default Comment;

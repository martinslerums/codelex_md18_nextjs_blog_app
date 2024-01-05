import Comment from "@/libs/models/CommentSchema";
import connectMongoDB from "@/libs/mongo/script";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectMongoDB();
    const comments = await Comment.find().populate("blog", "title").sort({ createdAt: -1 });
    return new NextResponse(JSON.stringify(comments));
  } catch (error) {
    return new NextResponse("Error in fetching MongoDB data: " + error);
  }
};

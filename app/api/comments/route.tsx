import Comment from "@/libs/models/CommentSchema";
import connectMongoDB from "@/libs/mongo/script";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectMongoDB();
    const blogs = await Comment.find().populate("blog", "title");
    return new NextResponse(JSON.stringify(blogs));
  } catch (error) {
    return new NextResponse("Error in fetching MongoDB data: " + error);
  }
};

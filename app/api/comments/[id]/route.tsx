import connectMongoDB from "@/libs/mongo/script";
import { NextRequest, NextResponse } from "next/server";
import Comment from "@/libs/models/CommentSchema";

export const DELETE = async (request: NextRequest, {params}: {params: {id: string}}) => {
  try {
    await connectMongoDB();
    await Comment.findByIdAndDelete(params.id)
    return new NextResponse(JSON.stringify({message: 'Comment deleted'}));
  } catch (error) {
    return new NextResponse("Error in deleting comment from Database: " + error);
  } 
}
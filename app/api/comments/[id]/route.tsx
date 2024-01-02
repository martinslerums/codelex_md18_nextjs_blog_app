import connectMongoDB from "@/libs/mongo/script";
import { NextRequest, NextResponse } from "next/server";
import Comment from "@/libs/models/CommentSchema";
import { Params } from "@/types/types";

export const DELETE = async (request: NextRequest, {params: {id}}: Params) => {
  try {
    await connectMongoDB();
    await Comment.findByIdAndDelete(id)
    return new NextResponse(JSON.stringify({message: 'Comment deleted'}));
  } catch (error) {
    return new NextResponse("Error in deleting comment from Database: " + error);
  } 
}
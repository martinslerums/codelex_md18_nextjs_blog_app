import connectMongoDB from "@/libs/mongo/script";
import { NextRequest, NextResponse } from "next/server";
import Comment from "@/libs/models/CommentSchema";
import { Params } from "@/types/types";

export const GET = async ( _: NextRequest, { params: { id } }: Params) => {
  try {
    await connectMongoDB();

    const comments = await Comment.find({ blog: id });

    // Check what API returns
    console.log( "API Response within Comments Route: ", JSON.stringify(comments));

    return new NextResponse(JSON.stringify(comments));
  } catch (error) {
    return new NextResponse("GET request for blog comments failed " + error);
  }
};

export const POST = async (request: NextRequest, { params: { id } }: Params) => {
  
  try {
    await connectMongoDB();

    const { author, comment } = await request.json();
    await Comment.create({ author, comment, blog: id });
    
    return NextResponse.json({ message: "Comment created" }, { status: 201 });

  } catch (error) {
    return new NextResponse("POST request for blog comments failed" + error);
  }
};

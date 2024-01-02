import connectMongoDB from "@/libs/mongo/script";
import { NextRequest, NextResponse } from "next/server";
import Comment from "@/libs/models/CommentSchema";

export const GET = async ( request: NextRequest, { params }: { params: { id: string } }) => {
  try {
    await connectMongoDB();
    const comments = await Comment.find({ blog: params.id });

    // Check what API returns
    console.log(
      "API Response within Comments Route: ",
      JSON.stringify(comments)
    );

    return new NextResponse(JSON.stringify(comments));
  } catch (error) {
    return new NextResponse("Error in fetching MongoDB data: " + error);
  }
};

export const POST = async (request: NextRequest, { params }: { params: { id: string } }) => {
  const { author, comment } = await request.json();
  await connectMongoDB();
  await Comment.create({ author, comment, blog: params.id });

  return NextResponse.json({ message: "Comment Created" }, { status: 201 });
};

import connectMongoDB from "@/libs/mongo/script";
import Blog from "@/libs/models/BlogSchema";
import Comment from "@/libs/models/CommentSchema";
import { NextRequest, NextResponse } from "next/server";
import { Params } from "@/types/types";

export const GET = async (request: NextRequest, { params: { id } }: Params) => {
  try {
    await connectMongoDB();
    const blog = await Blog.findById(id);

    //Check what API returns
    //console.log("API Response:", JSON.stringify(blog));

    return new NextResponse(JSON.stringify(blog));
  } catch (error) {
    return new NextResponse("Error in fetching MongoDB data: " + error);
  }
};

export const DELETE = async ( request: NextRequest, { params: { id } }: Params) => {
  try {
    await connectMongoDB();

    const deleteComments = await Comment.deleteMany({ blog: id });
    const deleteBlog = await Blog.findByIdAndDelete(id);

    console.log("Deleting blog with ID: ", id);

    return new NextResponse(JSON.stringify(deleteBlog));
  } catch (error) {
    return new NextResponse("Error in deleting blog from MongoDB: " + error);
  }
};

export const PATCH = async (request: NextRequest, { params: { id } }: Params) => {
  try {
    await connectMongoDB();
    
      const requestBody = await request.json();
      //  console.log('Received payload from client:', requestBody);

      const editBlog = await Blog.findByIdAndUpdate(id, requestBody);

    return new NextResponse(JSON.stringify(editBlog));
  } catch (error) {
    return new NextResponse("Error in editing blog in MongoDB: " + error);
  }
};

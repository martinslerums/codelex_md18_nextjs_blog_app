import connectMongoDB from "@/libs/mongo/script";
import Blog from "@/libs/models/BlogSchema";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    await connectMongoDB();
    const blog = await Blog.findById(params.id);

    //Check what API returns
    // console.log("API Response:", JSON.stringify(blog));

    return new NextResponse(JSON.stringify(blog));
  } catch (error) {
    return new NextResponse("Error in fetching MongoDB data: " + error);
  }
};

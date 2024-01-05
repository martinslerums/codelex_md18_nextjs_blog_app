import Blog from "@/libs/models/BlogSchema";
import connectMongoDB from "@/libs/mongo/script";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { NextRequest, NextResponse } from "next/server";

export const GET = async ( request: NextRequest, { params: { id } }: Params ) => {
  console.log("Params from tagsID: ", id)
  try {

    await connectMongoDB();
    
    const blog = await Blog.find({blogTag: id}).populate("blogTag", "name");

    //Check what API returns
    //console.log("API Response:", JSON.stringify(blog));

    return new NextResponse(JSON.stringify(blog));

  } catch (error) {
    return new NextResponse("Error in fetching MongoDB data: " + error);
  }
};

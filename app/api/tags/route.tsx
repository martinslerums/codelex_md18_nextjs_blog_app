import BlogTag from "@/libs/models/BlogTagSchema";
import connectMongoDB from "@/libs/mongo/script";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {

  try {

    await connectMongoDB();

    const tags = await BlogTag.find()

    return new NextResponse(JSON.stringify(tags));

  } catch (error) {
    return new NextResponse("GET request for blogs failed " + error);
  }
}; 

export const POST = async (request: NextRequest) => {
  try {
    
    await connectMongoDB();

    const { name } = await request.json();
    await BlogTag.create({ name });
  
    return NextResponse.json({ message: "Blog created" }, { status: 201 });

  } catch(error) {
      return new NextResponse("POST request for create blog failed " + error);
  }
};

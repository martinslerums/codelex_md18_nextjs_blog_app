import Blog from "@/libs/models/BlogSchema";
import BlogTag from "@/libs/models/BlogTagSchema";
import connectMongoDB from "@/libs/mongo/script";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {

  try {
    await connectMongoDB();

    const { title, imageUrl, body, blogTag} = await request.json();
    
    await Blog.create({ title, imageUrl, body, blogTag});
  
    return NextResponse.json({ message: "Blog created" }, { status: 201 });

  } catch(error) {
      return new NextResponse("POST request for create blog failed " + error);
  }
};

export const GET = async () => {

  try {
    await connectMongoDB();

    const tags = await BlogTag.find()
    const blogs = await Blog.find().populate("blogTag", "name")

    return new NextResponse(JSON.stringify(blogs));

  } catch (error) {
    return new NextResponse("GET request for blogs failed " + error);
  }
}; 

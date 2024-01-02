import connectMongoDB from "@/libs/mongo/script";
import Blog from "@/libs/models/BlogSchema";
import { NextResponse } from "next/server";

// export const POST = async (request) => {
//     const {title, imageUrl, body} = await request.json();
//     await connectMongoDB();
//     await Blog.create({
//         title, imageUrl, body
//     })
//     return NextResponse.json({message: "Blog Created"}, {status: 201})
// }

export const GET = async () => {
  try {
    await connectMongoDB();
    const blogs = await Blog.find().populate("blogTag", "name")
    return new NextResponse(JSON.stringify(blogs));
  } catch (error) {
    return new NextResponse("Error in fetching MongoDB data: " + error);
  }
}; 

// export const DELETE = async(request) => {
//     const id = request.nextUrl.searchParams.get('id')
//     await connectMongoDB();
//     await Blog.findByIdAndDelete(id);
//     return NextResponse.json({message: "Blog deleted"}, )
// }

import connectMongoDB from "@/libs/script";
import { NextRequest, NextResponse } from "next/server";
import Comment from "@/models/CommentsSchema";

export const GET = async ( request: NextRequest, { params }: { params: { id: string } }) => {

    try {
      await connectMongoDB();
      const comments = await Comment.find({ blog: params.id });
  
      // Check what API returns
      console.log("API Response within Comments Route: ", JSON.stringify(comments));
  
      return new NextResponse(JSON.stringify(comments));
    } catch (error) {
      return new NextResponse("Error in fetching MongoDB data: " + error);
    }
  };
  
// export const POST = async (request) => {
//     const {title, imageUrl, body} = await request.json();
//     await connectMongoDB();
//     await Blog.create({
//         title, imageUrl, body
//     })
//     return NextResponse.json({message: "Blog Created"}, {status: 201})
// }

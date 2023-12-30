import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";
import { hash } from "bcrypt";
import UserModel from "@/libs/models/UserSchema";
import connectMongoDB from "@/libs/mongo/script";

export const GET = async () => {
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json({
            message: "You are not authorized"
        })
    }

    return NextResponse.json({
        message: "Hello",
    })
}

// export const POST = async () => {
//     try {
//         await connectMongoDB()
//         const passwordHash = await hash("password", 10)
//         const adminUser = await UserModel.create({
//             username: "Admin",
//             password: passwordHash,
//         })
//         console.log("User created")

//         return NextResponse.json({
//             adminUser
//         })
//     }catch (error) {
//         console.error("Error message: ", error)
//     }
// }
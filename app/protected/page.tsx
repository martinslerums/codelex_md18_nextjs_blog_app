import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";




const ServerProtectedPage = async () => {
    const session = await getServerSession(authOptions);
    console.log("ServerProtectedPage - User: ", session)

    if(!session) {
        redirect("/api/auth/signin?callbackUrl=/protected")
    }

    return
}
 
export default ServerProtectedPage
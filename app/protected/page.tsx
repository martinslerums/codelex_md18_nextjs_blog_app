import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import ProtectedNavigation from "./ProtectedNavigation/ProtectedNavigation";



const ServerProtectedPage = async () => {
    const session = await getServerSession(authOptions);
    console.log("ServerProtectedPage - User: ", session)

    if(!session) {
        redirect("/api/auth/signin?callbackUrl=/protected")
    }

    return ( 
        <>
         <ProtectedNavigation />
        </>
     );
}
 
export default ServerProtectedPage
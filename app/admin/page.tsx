import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export default function Home(){
    const session = await getServerSession(authOptions)
    if (session?.user.role === "admin"){
        return (

            );
    } 

    return (
        <h1 className="text-50px">You are not authorized to visit this page.</h1>
    );

}
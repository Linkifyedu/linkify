import { Sidebar } from "@/components/sidebar";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export default async function Home(){
    const session = await getServerSession(authOptions)
    if (session?.user.role === "admin"){
        return (
            <Sidebar>
            </Sideba>
            );
    } 

    return (
        <h1 className="text-50px">You are not authorized to visit this page.</h1>
    );

}
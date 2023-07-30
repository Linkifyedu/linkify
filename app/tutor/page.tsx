import { redirect } from "next/navigation";
import {getServerSession} from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { Sidebar } from "@/components/layout/sidebar";

export default async function Home () {
    const session  =  await getServerSession(authOptions);
    const user = session?.user;   
    
    if(user?.role == "user") return redirect("/")

    return(
        <Sidebar>  
                      
          </Sidebar>
  
    );
}
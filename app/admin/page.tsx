import { Sidebar } from "@/components/layout/sidebar";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { ActiveUsers } from "@/components/tutors";
import {headers} from "next/headers"

async function getUsers() {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/getSubscribers`, {
      cache: "no-store",
      headers: headers()
    });
    // console.log(res);
    return res.json();
  }
  

export default async function Home(){
    const session = await getServerSession(authOptions)
    const users: {
        id:string ;
        email: string ; 
        name: string ;
        role: string ;
        image: string ;
        points: number ;
        isActive: boolean; 
  }[] = await getUsers(); 
  
    if (session?.user.role === "admin"){
        return (
            <Sidebar>
                <ActiveUsers users={users}/>
            </Sidebar>
            );
    } 

    return (
        <h1 className="text-50px">You are not authorized to visit this page.</h1>
    );

}
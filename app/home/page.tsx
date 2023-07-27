import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import  {Sidebar}  from "@/components/sidebar/index";
import { authOptions } from "../api/auth/[...nextauth]/route";
import {Subjects} from "@/components/subjectcards";
import {Tutors, Leaderboard } from "@/components/tutors";
import prisma from "@/prisma/prisma";

export default async function Home () {
    const session  =  await getServerSession(authOptions);
    const user = session?.user; 
    const firstname = user?.name?.split(" ", 1);  
    const getTutors = await prisma.user.findMany({
        where: {
            role: "admin",
        },
        select: {
            id:true,
            email: true, 
            name: true, 
            role: true, 
            image: true,
        },
        orderBy: {
            id: "desc"
        }
    })

    const getLeaders = await prisma.user.findMany({
        where: {
            isActive: true,
        },
        select: {
            id:true,
            name: true, 
            image: true,
            points: true,
        },
        orderBy: {
            points: "desc"
        }
    })

    
    if(!session){
    return (
        redirect("/")
        );
    }
    return(
        <Sidebar>

            <div className="w-full grid lg:grid-cols-2 lg:gap-8 md:gap-8 sm:gap-4 md:grid-cols-1 sm:grid-cols-1 lg:grid-rows-3">
                <h1 className="text-[40px] mb-4 md:col-span-2 lg:col-span-2 w-[377px] h-[100px]">
                    <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-b  from-[#277eb0] to-[#345263]">Welcome back</span>, {firstname}! 👋   
                </h1>
            
            <div className="">
                <h1 className="text-[30px] mb-4">Your subjects</h1>
                <Subjects user={session?.user}/>
            </div>

            <div className="justify-center">
            <h1 className="text-[30px] mb-4">Our tutors</h1>
                <Tutors users={getTutors} />
            </div>

            <div className="">
                <h1 className="text-[30px] mb-4">Leaderboard</h1>
                <Leaderboard users={getLeaders}/>
            </div>
            </div>
          </Sidebar>
  
    );
}
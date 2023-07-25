import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import  {Sidebar}  from "@/components/sidebar/index";
import Pricing from "@/components/pricingcards";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Home () {
    const session  =  await getServerSession(authOptions);
    const user = session?.user;   
    
    if(!session) return redirect("/")

    return(
        <Sidebar>
            <div className="grid grid-cols-2 gap-3 justify-items-center w-full  px-8 text-black md:mt-[97px] lg:mt-[97px] rounded-lg h-full">
                <Pricing/>
            </div>
          </Sidebar>
  
    );
}
import Form from "@/components/form"
import Benefits from "@/components/benefits"
import { getServerSession } from "next-auth";
import { useRouter } from "next/router";
import { redirect } from "next/navigation";
import {Divider} from "@nextui-org/react";
import Navbar from "@/components/navbar";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if(session) return redirect("/home");
  return (
    <>
    <Navbar/>
    <div className="md:mt-[90px] lg:mt-[100px] sm:mt-10  px-8">
    <div className="flex flex-col rounded-md  py-10 md:flex-row ">
      <div className="md:w-6/12 lg:w-6/12 sm:w-full ">
        <Form />
      </div>
      <div className="md:w-6/12 lg:w-6/12 sm:w-full rounded-2xl drop-shadow-md">
        <Benefits />
      </div>
    </div>
    </div>
    </>
  );
}


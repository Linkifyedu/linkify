import Link from "next/link";
import {GoogleButton} from "./googlebutton";
import { useSession } from 'next-auth/react'

export default function Form () {
    return (
        <div className="mt-20 text-center  p-10 lg:px-28 lg:py-32 font-poppins">
        <h1 className="text-foreground drop-shadow-sm font-bold text-[45px]">
        Hey there 👋
      </h1>
      <p className="text-[25px] mb-4">
      Please login with Google.
      </p>
        <GoogleButton/>
    
    </div>
    );
}
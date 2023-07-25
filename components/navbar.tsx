"use client";

import Image from "next/image";
import Link from "next/link";


export default function Navbar() {
    
    return (
        <div className="drop-shadow-sm mx-5 flex h-16 max-w-screen-xl items-center justify-between w-full">
          <Link href="/" className="flex items-center font-display text-2xl">
            <Image
              src="/logo.jpg"
              alt="Linkify logo"
              width="40"
              height="40"
              className="mr-2 rounded-md"
            ></Image>


            <p className = "text-[28px] text-foreground">linkify</p>
          </Link>
        </div>
    );
}
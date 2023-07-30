"use client"
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import {useSession} from "next-auth/react"

export function Subjects({user, }: {
    user: {
        id: string;
        role: string;
        stripeCustomerId: string;
        isActive: boolean;
        points: number;
        mathStudent: boolean;
        scienceStudent: boolean;
        readingStudent: boolean;
        name?: string | null | undefined;
        email?: string | null | undefined;
        image?: string | null | undefined;
    }
}){
    
    if(user.role == "user" && user.isActive == true){
        return (

    <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
    
        {user.mathStudent ?         
        <Card className="bg-background  text-foreground">
        <CardHeader className="flex flex-col">
           <h1 className="text-center text-[17px]">Mathematics</h1> 
        </CardHeader>
        <Divider/>
        <CardBody className="items-center text-[50px]">
            🧮
        </CardBody>
        </Card> 
    : ""}
    {user.scienceStudent ?     <Card  className="bg-background  text-foreground">
        <CardHeader className="flex flex-col">
           <h1 className="text-center text-[17px]">Science</h1> 
        </CardHeader>
        <Divider/>
        <CardBody className="items-center text-[50px]">
        🧪
        </CardBody>
    </Card> : ""}

    {user.readingStudent ?     <Card  className="bg-background  text-foreground">
        <CardHeader className="flex flex-col">
           <h1 className="text-center text-[17px]">Reading</h1> 
        </CardHeader>
        <Divider/>
        <CardBody className="items-center text-[50px]">
        📚
        </CardBody>
    </Card> : ""}

    </div>
        )
    } else {
        return (
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
             <Card  className="bg-background  text-foreground">
                <CardHeader className="flex flex-col">
                <h1 className="text-center text-[17px]">Staff</h1> 
                </CardHeader>
                <Divider/>
                <CardBody className="items-center text-[50px]">
                🖋️
                </CardBody>
            </Card> 
            </div>
        )
    }


}



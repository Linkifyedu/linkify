"use client"
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import {useSession} from "next-auth/react"

export function Subjects(){
    return(
    <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
        <Card className="bg-background  text-foreground">
        <CardHeader className="flex flex-col">
           <h1 className="text-center text-[17px]">Mathematics</h1> 
        </CardHeader>
        <Divider/>
        <CardBody className="items-center text-[50px]">
            🧮
        </CardBody>
    </Card>
    <Card className="bg-background  text-foreground">
        <CardHeader className="flex flex-col">
           <h1 className="text-center text-[17px]">Science</h1> 
        </CardHeader>
        <Divider/>
        <CardBody className="items-center text-[50px]">
        🧪
        </CardBody>
    </Card>
    <Card className="bg-background  text-foreground">
        <CardHeader className="flex flex-col">
           <h1 className="text-center text-[17px]">Reading</h1> 
        </CardHeader>
        <Divider/>
        <CardBody className="items-center text-[50px]">
        📚
        </CardBody>
    </Card>
    </div>
    );
}


export function TutorCard({users,}: {
    users: {
        id:string | null;
        email: string | null; 
        name: string | null;
        role: string | null;
        image: string | null;
        tutorEmail: string | null; 
        zoomLink: string | null;
}[];
}){     
        return(
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
            <Card className="bg-background  text-foreground">
            <CardHeader className="flex flex-col">
               <h1 className="text-center text-[17px]">{}</h1> 
            </CardHeader>
            <Divider/>
            <CardBody className="items-center text-[50px]">
                🧮
            </CardBody>
        </Card>
        </div>
        );
}
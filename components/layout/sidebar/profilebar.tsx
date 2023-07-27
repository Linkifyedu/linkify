"use client"
import { Avatar, Button, Card, CardBody, CardHeader, Checkbox, CheckboxGroup, Table, TableBody, TableColumn, TableHeader } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Profile({user, }: {
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
    const [selected, setSelected ] = useState([user?.mathStudent === true ? "Math" : "", user?.scienceStudent === true ? "Science" : "",user?.readingStudent === true ? "Reading"  : ""])
    const router = useRouter();
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch("/api/addSubject", {
                method: "POST",
                headers: {
            "Content-Type": "application/json",                },
                body: JSON.stringify({
                    selected: selected, 
                }),
            });

            if (res.ok){
                router.refresh(); 
                console.log(user)
            }
        } catch {
            router.refresh();
        }
    }
    return (
        <>
        <div className="flex flex-col">
            <form onSubmit={handleSubmit}>
                <CheckboxGroup
                label="Selected Subjects"
                color="primary"
                value={selected}
                onChange={setSelected}
                >
                <Checkbox isDisabled={user?.mathStudent} name="Math" value="Math">Math</Checkbox>
                <Checkbox isDisabled = {user?.scienceStudent} name="Science" value="Science">Science</Checkbox>
                <Checkbox isDisabled = {user?.readingStudent} name="Reading" value="Reading">Reading</Checkbox>
                </CheckboxGroup>
                <Button type="submit">Submit</Button>
            </form>
    </div>
        </>
    );
}
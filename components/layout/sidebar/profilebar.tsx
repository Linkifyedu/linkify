"use client"
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import {useSession} from "next-auth/react";
import { Avatar, Button, Card, CardBody, CardHeader, Checkbox, CheckboxGroup, Table, TableBody, TableColumn, TableHeader } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Profile(){
    const {data: session} = useSession();
    const user = session?.user; 
    const [errorMessage, setErrorMessage] = useState("Error creating comment");
    const [error, setError] = useState(false);
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
            setErrorMessage("Error updating subjects"); 
            setError(true);
        }
    }
    return (
        <>
        <div className="grid justify-center justify-items-center mx-auto">
            <div className="flex items-center px-10">
            <h1 className="text-[25px] px-[16px] text-foreground">Profile</h1>
            <Button  radius ="full" className="ml-[203px]" size="sm">Edit Profile</Button>
            </div>
            <div className="mt-[100px] flex-col text-center justify-center">
                <Avatar name="test" className="w-40 h-40"></Avatar>
                <h1 className="mt-[34px] text-[30px] font-bold">{user?.name}</h1>
            </div>

            <div className="flex">
            <Card className="mt-[7px] mr-4 bg-slate-500 w-full flex">
                    <CardHeader>
                        <h1 className="font-bold text-[20px]">Rank</h1>
                    </CardHeader>
                    <CardBody>
                        <p>TBD</p>
                    </CardBody>
                </Card>
                <Card className="mt-[7px] bg-slate-500 w-full flex">
                    <CardHeader>
                        <h1 className="font-bold text-[20px]">Points</h1>
                    </CardHeader>
                    <CardBody>
                        <p>{user?.points}</p>
                    </CardBody>
                </Card>
            </div>

            <div className="mt-[194px]">
                <h1 className="font-bold text-[30px]">Scheduled Sessions</h1>

                <Table aria-label="Example empty table">
      <TableHeader>
        <TableColumn>TUTOR</TableColumn>
        <TableColumn>DATA</TableColumn>
        <TableColumn>TIME</TableColumn>
      </TableHeader>
      <TableBody emptyContent={"No rows to display."}>{[]}</TableBody>
    </Table>
            </div>
        </div>

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

        </>
    );
}
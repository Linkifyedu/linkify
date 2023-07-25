"use client"
import { Avatar, Button, Card, CardBody, CardHeader, Table, TableBody, TableColumn, TableHeader } from "@nextui-org/react";

export default function Profile(){
    return (
        <>
        <div className="grid justify-center justify-items-center mx-auto">
            <div className="flex items-center px-10">
            <h1 className="text-[25px] px-[16px] text-foreground">Profile</h1>
            <Button  radius ="full" className="ml-[203px]" size="sm">Edit Profile</Button>
            </div>
            <div className="mt-[100px] flex-col text-center justify-center">
                <Avatar name="test" className="w-40 h-40"></Avatar>
                <h1 className="mt-[34px] text-[30px] font-bold">Test name</h1>
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
                        <p>TBD</p>
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
        </>
    );
}
"use client"
import prisma from "@/prisma/prisma";
import { Chip, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, User } from "@nextui-org/react";
import React from "react";

export default function Tutors({users,}: {
    users: {
        id:string | null;
        email: string | null; 
        name: string | null;
        role: string | null;
        image: string | null;
}[];
}){
    const columns = [
        {name: "NAME", uid: "name"},
        {name: "ROLE", uid: "role"},
          ];

      type User = typeof users[0];

      const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
        const cellValue = user[columnKey as keyof User];
    
        switch (columnKey) {
          case "name":
            return (
              <User
                avatarProps={{radius: "lg", src: user.image!}}
                description={user.email}
                name={cellValue}
              >
                {user.email}
              </User>
            );
          case "role":
            return (
              <div className="flex flex-col">
                <p className="text-bold text-sm capitalize text-default-400">{user.role}</p>
              </div>
            );
            default:
                return cellValue;
        }
      }, []);
    
    

    return(
        <>

    <Table className="text-black" aria-label="Tutors table">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={users}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>

        </>
    );
}


export function Leaderboard({users,}: {
  users: {
      id:string | null;
      name: string | null;
      image: string | null;
      points: number | null;
}[];
}){
  const columns = [
      {name: "NAME", uid: "name"},
      {name: "POINTS", uid: "points"},
        ];

    type User = typeof users[0];

    const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
      const cellValue = user[columnKey as keyof User];
  
      switch (columnKey) {
        case "name":
          return (
            <User
              avatarProps={{radius: "lg", src: user.image!}}
              name={cellValue}
            >
            </User>
          );
        case "role":
          return (
            <div className="flex flex-col">
              <p className="text-bold text-sm capitalize text-default-400">{user.points}</p>
            </div>
          );
          default:
              return cellValue;
      }
    }, []);
  
  

  return(
      <>

  <Table className="text-black" aria-label="Tutors table">
    <TableHeader columns={columns}>
      {(column) => (
        <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
          {column.name}
        </TableColumn>
      )}
    </TableHeader>
    <TableBody items={users}>
      {(item) => (
        <TableRow key={item.id}>
          {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
        </TableRow>
      )}
    </TableBody>
  </Table>

      </>
  );
}
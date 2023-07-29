"use client"
import prisma from "@/prisma/prisma";
import {  PencilSquareIcon, TrashIcon} from "@heroicons/react/24/outline";
import { Chip, ChipProps, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip, User } from "@nextui-org/react";
import React from "react";
import { DeleteIcon, EditIcon } from "./svgs/table";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

export function Tutors({users,}: {
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

export function ActiveUsers({users,}: {
  users: {
      id:string | null;
      email: string | null; 
      name: string | null;
      role: string | null;
      image: string | null;
      points: number | null;
      isActive: boolean | null; 
}[];
}){
  const columns = [
    {name: "NAME", uid: "name"},
    {name: "ROLE", uid: "role"},
    {name: "STATUS", uid: "status"},
    {name: "ACTIONS", uid: "actions"},
  ];
  const {isOpen, onOpen, onClose} = useDisclosure();


    const statusColorMap: Record<string, ChipProps["color"]>  = {
          true: "success",
          false: "danger",
        };
        
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
          case "points":
            return (
              <div className="flex flex-col">
              <p className="text-bold text-sm capitalize text-default-400">{user.points}</p>
            </div>
            );
          case "status":
            return (
              <Chip className="capitalize" color={statusColorMap[user.isActive === true ? "true" : "false"]} size="sm" variant="flat">
                {cellValue}
              </Chip>
            );
            case "actions":
              return (
                <div className="relative flex items-center gap-2">
                  <Tooltip content="Edit user">
                    <span  className="text-lg text-default-400 cursor-pointer active:opacity-50">
                      <EditIcon/>
                    </span>
                  </Tooltip>

                  <Tooltip color="danger" content="Delete user">
                    <span className="text-lg text-danger cursor-pointer active:opacity-50">
                      <DeleteIcon />
                    </span>
                  </Tooltip>
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


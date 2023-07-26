import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../app/api/auth/[...nextauth]/route";
import prisma from "@/prisma/prisma";

export default async function handler (
    req: NextApiRequest,
    res: NextApiResponse)  {
        const session = await getServerSession(req,res,authOptions)
        if(session?.user.role !== "admin"){
            return res
                .status(401)
                .json({message: "You must be an admin to add a tutor."})
        }

       try {
            const result = await prisma.user.findMany({
                where: {
                  role: "user"
                },
                select: {
                    id: true, 
                    email: true, 
                    name: true, 
                    role: true, 
                    image: true,
                    points: true,
                    isActive: true, 
                              },
                orderBy: {
                    id: "desc",
                },
            });
            return res.status(200).json(result) 
        } catch (error){
            res.status(403).json({err: "Unknown Error has occurred."})
        }
    }
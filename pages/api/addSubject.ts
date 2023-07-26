import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../app/api/auth/[...nextauth]/route";
import prisma from "@/prisma/prisma";

export default async function handler (
    req: NextApiRequest,
    res: NextApiResponse)  {
        const session = await getServerSession(req, res, authOptions)

        if(!session){
            return res
                .status(401)
                .json({message: "Please sign in to add subjects."})
        }

        const {user} = session; 
        const {selected} = req.body; 
        console.log(selected)
        try {
            const result = await prisma.user.update({
                where: {email: user?.email || undefined},
                data: {mathStudent: selected.has("Math"), scienceStudent: selected.has("Science"), readingStudent: selected.has("Reading")}
            });
            console.log(result)
            return res.json(result)
            
        } catch (err){
            res.status(402).json({err: "Unknown Error has occurred."})
        }
    }
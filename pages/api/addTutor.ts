import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../app/api/auth/[...nextauth]/route";
import prisma from "@/prisma/prisma";

export default async function handler (
    req: NextApiRequest,
    res: NextApiResponse)  {
        const session = await getServerSession(req, res, authOptions)

        if(!(session?.user.role === "admin")){
            return res
                .status(401)
                .json({message: "You must be an admin to add a tutor."})
        }

        const {studentEmail, tutorName, tutorEmail, tutorZoom } = req.body; 
        try {
            const result = await prisma.user.update({
                where: {email: studentEmail || undefined},
                data: {
                    tutorName: tutorName,
                    tutorEmail: tutorEmail, 
                    zoomLink: tutorZoom,
                }
            });
            return res.json(result)
            
        } catch (err){
            res.status(402).json({err: "Unknown Error has occurred."})
        }
    }
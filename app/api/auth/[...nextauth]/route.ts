
import NextAuth, {NextAuthOptions} from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import Stripe from 'stripe';
import prisma from "@/prisma/prisma"


export const authOptions:NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session ({ session, user}){
      session!.user!.id = user.id;
      session!.user!.stripeCustomerId = user.stripeCustomerId;
      session!.user!.isActive = user.isActive;
      session!.user!.points = user.points;
      session!.user!.mathStudent = user.mathStudent; 
      session!.user!.scienceStudent = user.scienceStudent; 
      session!.user!.readingStudent = user.readingStudent;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST}
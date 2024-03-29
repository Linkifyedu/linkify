import NextAuth, { DefaultSession } from "next-auth"
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
      id: string;
      role: string;
      stripeCustomerId: string; 
      isActive: boolean; 
      points: number; 
      mathStudent: boolean; 
      scienceStudent: boolean;
      readingStudent: boolean;
    } & DefaultSession["user"]
  }

  interface User extends DefaultUser {
    stripeCustomerId: string;
    isActive: boolean;
    role: string; 
    points: number; 
    mathStudent: boolean; 
    scienceStudent: boolean;
    readingStudent: boolean;
  }

}

declare module "next-auth/jwt" {
    interface JWT {
      id: string;
      role: string;
      stripeCustomerId: string; 
      isActive: boolean; 
    }
}

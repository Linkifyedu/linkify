"use client"

import { SessionProvider } from "next-auth/react";
import {NextUIProvider} from '@nextui-org/react';




const Providers = ({children}: { children: React.ReactNode }) => {
    return <NextUIProvider><SessionProvider>{children}</SessionProvider></NextUIProvider>
}

export default Providers;
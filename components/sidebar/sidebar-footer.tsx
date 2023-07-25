import { PowerIcon } from "@heroicons/react/24/outline";
import { signOut } from "next-auth/react";

const SidebarFooter = () => {
    const handleClick =() => {
        signOut({callbackUrl: "/"});
    }
  return (
    <div className="flex  flex-shrink-0 justify-center gap-4  border-neutral-200 px-12 py-2">
        <PowerIcon onClick={handleClick}  className="w-8 cursor-pointer h-8"/>
    </div>
  );
};

export default SidebarFooter;

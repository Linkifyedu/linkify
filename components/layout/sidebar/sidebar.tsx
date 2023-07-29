import SidebarBrand from "./sidebar-brand";
import SidebarContent from "./sidebar-content";
import SidebarHeader from "./sidebar-header";
import SidebarLink from "./sidebar-link";
import SidebarFooter from "./sidebar-footer";
import { Dialog, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ChatBubbleOvalLeftEllipsisIcon,
  Cog6ToothIcon,
  ServerStackIcon,
  XMarkIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";
import { useSession } from "next-auth/react";
import {Button, User} from "@nextui-org/react";
import { redirect } from "next/navigation";
import Link from "next/link";

const navigation = [
  {
    name: "Home",
    href: "/",
    icon: <ServerStackIcon />,
    showDivider: false,
  },
  {
    name: "Purchase",
    href: "/plans",
    icon: <CurrencyDollarIcon />,
    showDivider: true,
  },
];

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const {data: session, status} = useSession();
  const {user} = session || {};
  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 md:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-neutral-50 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-background">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute right-0 top-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-neutral-900"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-neutral-900"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <SidebarHeader>
                  <SidebarBrand />
                  <SidebarContent>
                    {navigation.map((item, index) => (
                      <SidebarLink
                        key={index}
                        name={item.name}
                        href={item.href}
                        icon={item.icon}
                        showDivider={item.showDivider}
                      />
                    ))}
                  </SidebarContent>
                  <User 
                        name={user?.email}
                        avatarProps={{
                          src: user?.image ? user.image : undefined
                          
                        }}/>
                    <Button color = "primary">Edit Profile</Button>
                </SidebarHeader>
                <SidebarFooter />
              </Dialog.Panel>
            </Transition.Child>
            <div className="w-14 flex-shrink-0" />
          </div>
        </Dialog>
      </Transition.Root>
        
      <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        <div className="flex min-h-0 flex-1 flex-col border-r border-neutral-200">
          <SidebarHeader>
            <SidebarBrand />
            <SidebarContent>
              {navigation.map((item, index) => (
                <SidebarLink
                  key={index}
                  name={item.name}
                  href={item.href}
                  icon={item.icon}
                  showDivider={item.showDivider}
                />
              ))}
            </SidebarContent>
            <div className="flex flex-col justify-center items-center">
            <User 
                        name={user?.email}
                        avatarProps={{
                          src: user?.image ? user.image : undefined
                        }}/>
           <Button className="w-6/12 h-6/12" color = "primary">Edit Profile</Button>
           </div>
          </SidebarHeader>
          <SidebarFooter />
        </div>
      </div>
      <div className="flex h-full flex-1 flex-col md:pl-64">
        <div className="sticky top-0 z-10 border-b border-neutral-200 bg-background pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden">
          <button
            type="button"
            className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <main className="flex-1">
          <div className="h-full py-6">
            <div className="flex  mx-auto h-full px-4 sm:px-6 md:px-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Sidebar;


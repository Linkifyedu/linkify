import Image from "next/image"

function SidebarBrand() {
  return (
    <div className="flex flex-shrink-0 items-center justify-center px-4 text-3xl font-semibold text-neutral-900">
            <Image
              src="/logo.jpg"
              alt="Linkify logo"
              width="40"
              height="40"
              className="mr-2 drop-shadow-sm rounded-md"
            ></Image>    
            </div>
  );
};

export default SidebarBrand;

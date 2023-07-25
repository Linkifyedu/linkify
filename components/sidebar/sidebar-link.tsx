import { SidebarLinkVariants, sidebarLink } from "./sidebar.styles";
import { Divider } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";

interface SidebarLinkProps extends SidebarLinkVariants {
  name: string;
  href: string;
  icon: React.ReactElement;
  showDivider: boolean;
}

const SidebarLink = ({ name, href, icon, showDivider }: SidebarLinkProps) => {
  const pathname = usePathname();

  const { base, icon: iconStyle } = sidebarLink({
    isActive: pathname === href,
    showDivider,
  });

  return (
    <>
      {showDivider && <Divider className="!mt-2" />}

      <Link href={href} className={base()}>
        {React.cloneElement(icon, {
          className: twMerge(iconStyle(), icon.props.className),
        })}
        {name}
      </Link>
    </>
  );
};

export default SidebarLink;

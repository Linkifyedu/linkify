import {type VariantProps } from "@nextui-org/react";
import {tv} from "tailwind-variants"

export const sidebarLink = tv({
  slots: {
    base: "group flex items-center px-3 py-2.5 text-lg rounded-lg duration-150 active:scale-[98%]",
    icon: "mr-3 flex-shrink-0 h-6 w-6",
  },
  variants: {
    isActive: {
      true: {
        base: "bg-primary-300 text-foreground",
        icon: "text-primary",
      },
      false: {
        base: "text-foreground hover:bg-neutral-200",
        icon: "text-neutral-700 group-hover:text-neutral-900",
      },
    },
    showDivider: {
      true: "!mt-2",
    },
  },
});

export type SidebarLinkVariants = VariantProps<typeof sidebarLink>;

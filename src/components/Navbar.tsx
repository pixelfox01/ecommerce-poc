"use client";

import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <nav className="flex items-center">
      <MaxWidthWrapper className="py-2 border-b border-gray-200">
        <NavigationMenu>
          <NavigationMenuList>
            <div className="mx-4 flex lg:ml-0">
              <Link
                className="text-primary font-bold tracking-widest uppercase text-lg lg:text-xl"
                href="/"
              >
                GRATIS LLC
              </Link>
            </div>
            <NavItems />
          </NavigationMenuList>
        </NavigationMenu>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;

"use client";

import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import NavItems from "./NavItems";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Cart from "./Cart";

const Navbar = () => {
  const user = null;

  return (
    <nav className="flex items-center">
      <MaxWidthWrapper className="flex items-center py-2 border-b border-gray-200">
        {/* TODO: Mobile Nav */}
        <div className="mx-4 flex lg:ml-0">
          <Link
            className="text-primary font-bold tracking-widest uppercase text-lg lg:text-xl"
            href="/"
          >
            GRATIS LLC
          </Link>
        </div>
        <NavigationMenu className="w-full">
          <NavigationMenuList>
            <div className="hidden lg:ml-8 lg:flex lg:self-stretch">
              <NavItems />
            </div>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="ml-auto flex items-center">
          <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
            {user || (
              <Link
                href="/sign-in"
                className={buttonVariants({
                  variant: "ghost",
                })}
              >
                Sign in
              </Link>
            )}

            {user || <Separator orientation="vertical" className="h-6" />}

            {user ? (
              <p></p>
            ) : (
              <Link
                href="/sign-up"
                className={buttonVariants({ variant: "ghost" })}
              >
                Create Account
              </Link>
            )}

            {user && <Separator orientation="vertical" className="h-6" />}

            {user || (
              <div className="flex lg:ml-6">
                <Separator orientation="vertical" className="h-6" />
              </div>
            )}

            <div className="ml-4 flow-root lg:ml-6">
              <Cart />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;

"use client";

import Link from "next/link";
import {
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { PRODUCT_CATEGORIES } from "@/config";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const NavItems = () => {
  return (
    <>
      <NavigationMenuItem>
        <Link href="#" legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            All Products
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      {PRODUCT_CATEGORIES.map((category) => (
        <NavigationMenuItem key={category.value}>
          <NavigationMenuTrigger>{category.label}</NavigationMenuTrigger>
          <NavigationMenuContent className="max-h-96 overflow-y-auto">
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {category.subcategories.map((item) => (
                <ListItem key={item.name} title={item.name} href={item.href} />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      ))}
    </>
  );
};

const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex justify-between text-sm font-medium leading-none">
            {title}
            <ChevronRight size={12} className="inline" />
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default NavItems;

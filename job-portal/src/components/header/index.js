"use client";

import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

function Header({user}) {
  const menuItems = [
    {
      label: "Home",
      path: "/",
      show: true,
    },
    {
      label: "Login",
      path: "/sign-in",
      show: !user,
    },
    {
      label: "Register",
      path: "/sign-up",
      show: !user,
    },
    {
      label: "Jobs",
      path: "/jobs",
      show: user,
    },
    {
      label: "Activity",
      path: "/activity",
      show: user,
    },
    {
      label: "Membership",
      path: "/membership",
      show: user,
    },
    {
      label: "Account",
      path: "/account",
      show: user,
    },
  ];
  return (
      <header className="flex min-h-[10vh] w-full shrink-0 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="lg:hidden">
              <AlignJustify className="h-6 w-6" />
              <span className="sr-only">Toggle Navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <Link className="mr-6 hidden lg:flex " href="#">
              <h3 className="font-bold tracking-wide text-xl">MAKE FUTURE BRIGHT</h3>
            </Link>
            <div className="grid gap-2 py-6">
              {menuItems.map((menuItem,index) =>
                menuItem.show ? (
                  <Link
                    href={menuItem.path}
                    className="flex w-full items-center py-2 text-lg font-semibold"
                    key={menuItem.label}
                  >
                    {menuItem.label}
                  </Link>
                ) : null
              )}
              <UserButton afterSignOutUrl="/"/>
            </div>
          </SheetContent>
        </Sheet>
        <Link className="hidden lg:flex mr-6 font-bold tracking-wide text-xl" href={'/'}>MAKEFUTUREBRIGHT</Link>
        <nav className="hidden lg:flex mr-6 ml-auto">  
          {
            menuItems.map((menuItem)=>menuItem.show ? <Link key={menuItem.label} href={menuItem.path} className="group inline-flex h-9 w-max items-center rounded-md bg-white px-4 py-2 text-sm font-medium">{menuItem.label}</Link> : null)
          }
          <UserButton afterSignOutUrl="/"/>
        </nav>
      </header>
  );
}

export default Header;

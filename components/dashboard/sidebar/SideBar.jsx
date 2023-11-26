"use client";
import React from "react";
import { useSidebarContext } from "@/context/SidebarContext";
import {
  IoGridOutline,
  IoPersonOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { LiaLayerGroupSolid } from "react-icons/lia";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { VscColorMode } from "react-icons/vsc";
import { ModeToggle } from "@/components/mode-toggle";
import AddNewBtn from "./AddNewBtn";
import { cn } from "@/lib/utils";
import LogoutBtn from "./LogoutBtn";
import { Separator } from "@/components/ui/separator";
import Pung from "@/components/ui/Pung";

export function SideBar() {
  const { data: session } = useSession();
  const { isLargeOpen, isSmallOpen, close } = useSidebarContext();
  const segment = useSelectedLayoutSegment();

  const sidebarOptions = [
    {
      name: "Dashboard",
      href: "/dashboard",
      title: "Dashboard",
      icon: IoGridOutline,
      current: `/${segment}` === "/dashboard" ? true : false,
    },
    {
      name: "Groups",
      href: "/groups",
      title: "Groups",
      icon: LiaLayerGroupSolid,
      current: `/${segment}` === "/groups" ? true : false,
    },
    {
      name: "Profile",
      href: "/profile",
      title: "Profile",
      icon: IoPersonOutline,
      current: `/${segment}` === "/profile" ? true : false,
    },

    {
      name: "Settings",
      href: "/settings",
      title: "Settings",
      icon: IoSettingsOutline,
      current: `/${segment}` === "/settings" ? true : false,
    },
  ];
  const commonClasses =
    "flex flex-col overflow-y-auto scrollbar-hidden border p-4";
  const commonClasses1 =
    "bg-accent border border-neutral-300 dark:border-neutral-600 hover:dark:border-neutral-500 duration-500 font-bold text-sm";
  const commonClasses2 =
    "hover:bg-accent hover:dark:bg-accent/50 dark:text-foreground/70 duration-200 font-normal";

  return (
    <>
      <aside
        className={`${commonClasses} sticky top-0 justify-between ${
          isLargeOpen ? "lg:hidden" : "lg:flex"
        }`}
      >
        <ul className="flex flex-col gap-3 w-full">
          <AddNewBtn />
          {sidebarOptions.map((option) => (
            <li key={option.name}>
              <Link
                href={option.href}
                title={option.title}
                className={cn(
                  option.current ? `${commonClasses1}` : `${commonClasses2}`,
                  "group flex gap-x-3 rounded-md p-2 text-sm tracking-wide leading-6"
                )}
              >
                <option.icon className="h-6 w-6 shrink-0" />
              </Link>
            </li>
          ))}
          <Separator />
        </ul>
        <ul className="flex flex-col gap-3">
          <ModeToggle />
          <LogoutBtn
            iconCn="w-5 h-5"
            classn="group flex justify-center p-2 text-sm tracking-wide leading-6"
          />
        </ul>
      </aside>
      <aside
        className={`${commonClasses} flex flex-col justify-between w-56 lg:sticky absolute top-0 p-2 gap-2 ${
          isLargeOpen ? "lg:flex" : "lg:hidden"
        } ${
          isSmallOpen ? "flex z-[999] bg-background max-h-screen" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-3 w-full">
          <AddNewBtn title="Add new" />

          {sidebarOptions.map((option) => (
            <li key={option.name}>
              <Link
                href={option.href}
                className={cn(
                  option.current ? `${commonClasses1}` : `${commonClasses2}`,
                  "group flex gap-x-3 rounded-md p-2 text-sm tracking-wide leading-6"
                )}
              >
                <option.icon className="h-6 w-6 shrink-0" />
                {option.name}
              </Link>
            </li>
          ))}
          <Separator />
        </ul>
        <ul className="flex flex-col gap-3">
          <li>
            <p className="flex items-center justify-center border duration-200 text-sm font-normal gap-7 rounded">
              <VscColorMode />
              Theme
              <ModeToggle variant="noOutline" />
            </p>
          </li>
          <li>
            <p className="flex items-center justify-center text-sm bg-accent dark:bg-neutral-900 border border-border duration-200 capitalize py-2 px-2 gap-2 rounded">
              {session?.user?.name}
              <Pung />
            </p>
          </li>
          <LogoutBtn title="Logout" />
        </ul>
      </aside>
    </>
  );
}

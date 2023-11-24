"use client";
import React from "react";
import Logo from "@/public/logo.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { HamIcon } from "./HamIcon";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full py-3 px-5">
      <Link href="/" className="flex justify-center items-center gap-2">
        <Image src={Logo} alt="Logo" height={60} width={60} unoptimized className="w-10 md:w-14"/>
        <h1 className="md:text-xl font-bold">AuthKeeper</h1>
      </Link>

      <div className="flex gap-3">
        <div className="hidden lg:block">
          <ModeToggle />
        </div>
        <div className="ml-4 mr-1 flex lg:hidden">
          <HamIcon />
        </div>
        <div className="hidden lg:flex gap-3">
          <Button
            variant="outline"
            className="underline"
            onClick={() => {
              location.assign("/signup");
            }}
          >
            Signup
          </Button>
          <Button
            className="w-[100px]"
            onClick={() => {
              location.assign("/login");
            }}
          >
            Login
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

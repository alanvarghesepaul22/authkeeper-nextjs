"use client";
import React from "react";
import Logo from "@/public/logo.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between w-full py-3 px-5">
      <Link href="/" className="flex justify-center items-center gap-2">
        <Image src={Logo} alt="Logo" height={60} width={60} unoptimized />
        <h1 className="text-xl font-bold">AuthKeeper</h1>
      </Link>

      <div className="flex gap-3">
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
    </nav>
  );
};

export default Navbar;

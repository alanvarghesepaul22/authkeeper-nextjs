import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/public/logo.png";
import AvatarComp from "./AvatarComp";

const Header = () => {
  return (
    <nav className="flex justify-between items-center w-full py-4 px-5 border-b">
      <Link href="/" className="flex justify-center items-center gap-2">
        <Image
          src={Logo}
          alt="Logo"
          height={60}
          width={60}
          unoptimized
          className="w-10 md:w-14"
        />
        <h1 className="md:text-xl font-bold">AuthKeeper</h1>
      </Link>
      <AvatarComp />
    </nav>
  );
};

export default Header;

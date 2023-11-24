import Image from "next/image";
import React from "react";
import HeroLogo from "@/public/logo.png";

const AuthHeader = ({ title, subtitle }) => {
  return (
    <>
      <Image src={HeroLogo} alt="herologo" width={50} height={50} unoptimized />
      <p className="text-lg md:text-2xl font-semibold">{title}</p>
      <p className="md:text-lg text-foreground/60">{subtitle}</p>
    </>
  );
};

export default AuthHeader;

import Image from "next/image";
import React from "react";
import HeroLogo from "@/public/logo.png";
import { HeroSectionData } from "@/public/data";
import GetstartedBtn from "./GetstartedBtn";

const HeroSection = () => {
  let { id, title, subtitle, description } = HeroSectionData[0];
  return (
    <div>
      <div className="h-full w-full flex flex-col justify-center items-center">
        <Image
          src={HeroLogo}
          alt="herologo"
          width={200}
          height={200}
          unoptimized
        />
        <div className="p-10 flex justify-center flex-col items-center gap-4 text-center">
          <p className="text-5xl font-bold">{title}</p>
          <p className="text-2xl font-semibold">{subtitle}</p>
          <p className="text-xl w-3/4 text-neutral-600">{description}</p>
        </div>
        <GetstartedBtn />
      </div>
    </div>
  );
};

export default HeroSection;

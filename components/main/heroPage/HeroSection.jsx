import Image from "next/image";
import React from "react";
import HeroLogo from "@/public/logo.png";
import { HeroSectionData } from "@/public/data";
import GetstartedBtn from "./GetstartedBtn";

const HeroSection = () => {
  let { title, subtitle, description } = HeroSectionData[0];
  return (
    <div>
      <div className="h-full w-full flex flex-col justify-center items-center mt-5 md:mt-0">
        <Image
          src={HeroLogo}
          alt="herologo"
          width={200}
          height={200}
          unoptimized
          className="animate-pulse w-36 md:w-52"
        />
        <div className="p-10 flex justify-center flex-col items-center gap-4 text-center">
          <p className="text-4xl md:text-5xl font-bold">{title}</p>
          <p className="text-xl md:text-2xl font-semibold">{subtitle}</p>
          <p className="md:text-xl text-justify md:text-center md:w-3/4 text-foreground/60">
            {description}
          </p>
        </div>
        <GetstartedBtn />
      </div>
    </div>
  );
};

export default HeroSection;

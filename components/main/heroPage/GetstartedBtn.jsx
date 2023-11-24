"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { FaAngleRight } from "react-icons/fa6";

const GetstartedBtn = () => {
  return (
    <Button
      className="w-[200px] flex gap-3 justify-center items-center"
      size="lg"
      onClick={() => {
        location.assign("/signup");
      }}
    >
      GET STARTED
      <FaAngleRight />
    </Button>
  );
};

export default GetstartedBtn;

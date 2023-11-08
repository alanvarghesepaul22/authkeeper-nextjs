"use client";
import React from "react";
import { Button } from "@/components/ui/button";

const GetstartedBtn = () => {
  return (
    <Button
      className="w-[200px]"
      size="lg"
      onClick={() => {
        location.assign("/signup");
      }}
    >
      GET STARTED
    </Button>
  );
};

export default GetstartedBtn;

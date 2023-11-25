"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const AvatarComp = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Avatar
            onClick={() => {
              location.assign("dashboard/profile");
            }}
          >
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>AVP</AvatarFallback>
          </Avatar>
        </TooltipTrigger>
        <TooltipContent>
          <p>Alan Varghese Paul</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default AvatarComp;

import { Separator } from "@/components/ui/separator";
import React from "react";

const PageTitle = ({ children, title }) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <p className="text-xl md:text-2xl py-4 font-semibold">{title}</p>
        <div className="flex gap-3 items-center">{children}</div>
      </div>
      <Separator />
    </>
  );
};

export default PageTitle;

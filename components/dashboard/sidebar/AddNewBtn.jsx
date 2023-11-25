import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";
import { IoAddCircleOutline } from "react-icons/io5";

const AddNewBtn = ({ title }) => {
  return (
    <Button
      className={cn(
        "group flex justify-start gap-x-3 p-2 text-sm tracking-wide leading-6"
      )}
      onClick={() => {
        location.assign("/dashboard/addnew");
      }}
    >
      <IoAddCircleOutline className="h-6 w-6 shrink-0" />
      {title && <p>{title}</p>}
    </Button>
  );
};

export default AddNewBtn;

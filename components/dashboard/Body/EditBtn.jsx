import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";
import { IoAddCircleOutline, IoCreateOutline } from "react-icons/io5";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const EditBtn = ({ title, variant }) => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className={cn(
              "group flex justify-start gap-x-3 p-2 text-sm tracking-wide leading-6"
            )}
            variant={variant}
            title="Edit"
          >
            <IoCreateOutline  className="h-6 w-6 shrink-0" />
            {title && <p className="hidden md:flex">{title}</p>}
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Details</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-6 py-4 px-2">
            <div className="grid grid-rows gap-3">
              <Label htmlFor="name">Name</Label>
              <Input id="name" className="col-span-3" />
            </div>
            <div className="grid grid-rows gap-3">
              <Label htmlFor="username">Username</Label>
              <Input id="username" className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EditBtn;

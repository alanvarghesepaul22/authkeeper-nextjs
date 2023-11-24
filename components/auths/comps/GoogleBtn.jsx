import { Button } from "@/components/ui/button";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const GoogleBtn = () => {
  return (
    <Button variant="outline" className="flex gap-4">
      <FcGoogle className="text-2xl" />
      Continue with Google
    </Button>
  );
};

export default GoogleBtn;

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const GoogleBtn = () => {
  return (
    <Button
      variant="outline"
      className="w-full flex gap-4"
      onClick={() => signIn("google")}
    >
      <FcGoogle className="text-2xl" />
      Continue with Google
    </Button>
  );
};

export default GoogleBtn;

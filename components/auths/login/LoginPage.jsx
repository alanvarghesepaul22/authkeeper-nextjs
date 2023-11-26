"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import GoogleBtn from "../comps/GoogleBtn";
import RedirectLink from "../comps/RedirectLink";
import Seperator from "../comps/Seperator";
import AuthHeader from "../comps/AuthHeader";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast({
        variant: "destructive",
        title: "All Fields are neccessary.",
        description: "Fill in all required details and try again.",
      });
      return;
    }

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res) {
        console.log(res);
      }
      if (res.error) {
        toast({
          variant: "destructive",
          title: "Uh oh! Invalid Credentials.",
          description: "Email or password given is wrong.",
        });
        return;
      }

      router.replace("dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <AuthHeader
        title="Welcome back to AuthKeeper"
        subtitle="Login to continue"
      />
      <div className="mt-10 w-full px-6 md:w-96">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button>Login</Button>
          <RedirectLink
            title="No account?"
            linkname="Create an account"
            url="/signup"
          />
          <Seperator />
        </form>
        <GoogleBtn />
      </div>
    </div>
  );
};

export default LoginPage;

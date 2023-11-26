"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import GoogleBtn from "../comps/GoogleBtn";
import RedirectLink from "../comps/RedirectLink";
import Seperator from "../comps/Seperator";
import AuthHeader from "../comps/AuthHeader";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const SignupPage = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      toast({
        variant: "destructive",
        title: "All Fields are neccessary.",
        description: "Fill in all required details and try again.",
      });
      return;
    }

    try {
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        toast({
          variant: "destructive",
          title: "User already exists!",
          description:
            "An user with the same email already exist. Try using another email id.",
        });
        return;
      }

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target;
        toast({
          variant: "success",
          title: "User registered successfully!",
          description: "Login to continue.",
        });
        form.reset();
        router.push("/login");
      } else {
        toast({
          variant: "destructive",
          title: "User registration failed!",
          description: "Login to continue.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error during registration:",
        description: error,
      });
    }
  };
  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <AuthHeader
        title="Welcome to AuthKeeper"
        subtitle="Signup to create an account"
      />
      <div className="mt-10 w-full px-6 md:w-96">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <Input
            type="text"
            placeholder="Username"
            onChange={(e) => setName(e.target.value)}
          />
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
          <Button>Create account</Button>
          <RedirectLink
            title="Already have an account?"
            linkname="Login"
            url="/login"
          />
          <Seperator />
        </form>
        <GoogleBtn />
      </div>
    </div>
  );
};

export default SignupPage;

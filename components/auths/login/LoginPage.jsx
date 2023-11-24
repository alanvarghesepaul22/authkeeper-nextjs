import React from "react";
import HeroLogo from "@/public/logo.png";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import GoogleBtn from "../comps/GoogleBtn";
import RedirectLink from "../comps/RedirectLink";
import Seperator from "../comps/Seperator";
import AuthHeader from "../comps/AuthHeader";

const LoginPage = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <AuthHeader
        title="Welcome back to AuthKeeper"
        subtitle="Login to continue"
      />
      <div className="mt-10 w-full px-6 md:w-96">
        <form action="" className="flex flex-col gap-4">
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button>Login</Button>
          <RedirectLink title="No account?" linkname="Create an account" />
          <Seperator />
          <GoogleBtn />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

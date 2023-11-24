import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import GoogleBtn from "../comps/GoogleBtn";
import RedirectLink from "../comps/RedirectLink";
import Seperator from "../comps/Seperator";
import AuthHeader from "../comps/AuthHeader";

const SignupPage = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <AuthHeader
        title="Welcome to AuthKeeper"
        subtitle="Signup to create an account"
      />
      <div className="mt-10 w-full px-6 md:w-96">
        <form action="" className="flex flex-col gap-3">
          <Input type="text" placeholder="Username" />
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button>Create account</Button>
          <RedirectLink title="Already have an account?" linkname="Login" />
          <Seperator />
          <GoogleBtn />
        </form>
      </div>
    </div>
  );
};

export default SignupPage;

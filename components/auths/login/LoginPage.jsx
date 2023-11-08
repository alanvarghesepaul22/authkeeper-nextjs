import React from "react";
import HeroLogo from "@/public/logo.png";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  return (
    <div className="flex flex-col justify-center items-center py-10">
      <Image src={HeroLogo} alt="herologo" width={50} height={50} unoptimized />
      <p className="text-2xl font-semibold">Welcome back to AuthKeeper</p>
      <p className="text-lg text-neutral-600">Login to continue</p>
      <div className="mt-10 w-96">
        <form action="" className="flex flex-col gap-3">
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <p className="text-neutral-500 text-center">
            No account?
            <span>
              <Link href="/signup" className="text-blue-500 underline">
                {" "}
                Create an account
              </Link>
            </span>
          </p>
          <Button>Login</Button>
          <p className="text-center text-neutral-500">OR</p>
          <Button variant="outline" className="flex gap-4">
            <FcGoogle className="text-2xl" />
            Continue with Google
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

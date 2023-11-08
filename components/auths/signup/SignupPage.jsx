import Image from 'next/image'
import React from 'react'
import HeroLogo from "@/public/logo.png";
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FcGoogle } from 'react-icons/fc';

const SignupPage = () => {
  return (
    <div className="flex flex-col justify-center items-center py-10">
      <Image src={HeroLogo} alt="herologo" width={50} height={50} unoptimized />
      <p className="text-2xl font-semibold">Welcome to AuthKeeper</p>
      <p className="text-lg text-neutral-600">Signup to create an account</p>
      <div className="mt-10 w-96">
        <form action="" className="flex flex-col gap-3">
          <Input type="text" placeholder="Username" />
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Input type="password" placeholder="Confirm Password" />
          <p className="text-neutral-500 text-center">
          Already have an account? 
            <span>
              <Link href="/login" className="text-blue-500 underline">
                {" "}
                Login
              </Link>
            </span>
          </p>
          <Button>Create account</Button>
          <p className="text-center text-neutral-500">OR</p>
          <Button variant="outline" className="flex gap-4">
            <FcGoogle className="text-2xl" />
            Continue with Google
          </Button>
        </form>
      </div>
    </div>
  )
}

export default SignupPage
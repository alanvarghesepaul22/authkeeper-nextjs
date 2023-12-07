import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const PasswordInput = ({ val, ivVal }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [orgPassword, setOrgPassword] = useState(val);

  const toggleVisibility = async (e) => {
    e.preventDefault();

    await fetch("/api/decryptPassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: val,
        iv: ivVal,
      }),
    })
      .then(async (res) => {
        const data = await res.text();
        setOrgPassword(data);
        setShowPassword(!showPassword);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="flex gap-2">
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="w-28 font-medium border-0 p-0 bg-transparent"
          value={orgPassword}
          readOnly
        />
        <Button variant="ghost" onClick={toggleVisibility}>
          {showPassword ? (
            <IoEyeOutline className="duration-500" />
          ) : (
            <IoEyeOffOutline className="duration-500" />
          )}
        </Button>
      </div>
    </>
  );
};

export default PasswordInput;

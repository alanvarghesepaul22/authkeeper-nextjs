import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import React from "react";
import { IoLogOutOutline } from "react-icons/io5";

const LogoutBtn = ({ title, iconCn = "w-6 h-6 mr-2", classn }) => {
  return (
    <Button onClick={() => signOut()} className={classn} title="Logout">
      <IoLogOutOutline className={iconCn} />
      {title && <p>{title}</p>}
    </Button>
  );
};

export default LogoutBtn;

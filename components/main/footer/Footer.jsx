import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-16 mt-9 flex justify-center items-center">
      <p className="text-foreground/50">
        AuthKeeper &copy; {new Date().getFullYear()}. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;

import Link from "next/link";
import React from "react";

const RedirectLink = ({ title, linkname }) => {
  return (
    <p className="text-neutral-500 text-center">
      {title}
      <span>
        <Link href="/login" className="text-blue-500 underline">
          {" "}
          {linkname}
        </Link>
      </span>
    </p>
  );
};

export default RedirectLink;

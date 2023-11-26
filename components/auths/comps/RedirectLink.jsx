import Link from "next/link";
import React from "react";

const RedirectLink = ({ title, linkname ,url}) => {
  return (
    <p className="text-neutral-500 text-center">
      {title}
      <span>
        <Link href={url} className="text-blue-500 underline">
          {" "}
          {linkname}
        </Link>
      </span>
    </p>
  );
};

export default RedirectLink;

import React from "react";

const Seperator = () => {
  return (
    <div className="my-2 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-border after:border-border after:mt-0.5 after:flex-1 after:border-t">
      <p className="mx-4 mb-0 text-center font-semibold text-foreground/40">
        or
      </p>
    </div>
  );
};

export default Seperator;

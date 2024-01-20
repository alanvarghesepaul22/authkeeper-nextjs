import { Button } from "@/components/ui/button";
import React from "react";

const FormBtn = ({ isSubmitting, title, waitTitle }) => {
  return (
    <>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            {waitTitle}...
            <div className="h-3 w-3 animate-spin rounded-full border-b-2 border-background ml-3"></div>
          </>
        ) : (
          <>{title}</>
        )}
      </Button>
    </>
  );
};

export default FormBtn;

import { Button } from "@/components/ui/button";
import { Clipboard, ClipboardCheck } from "lucide-react";
import React, { useState } from "react";

const CopyButton = ({ val, ivVal, username }) => {
  const [copied, setCopied] = useState(false);

  const copyPassword = async () => {
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

        navigator.clipboard
          .writeText(data)
          .then(() => {
            setCopied(true);
            setTimeout(() => {
              setCopied(false);
            }, 2000);
          })
          .catch((error) => {
            console.error("Unable to copy to clipboard", error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const copyUsername = (str) => {
    navigator.clipboard
      .writeText(str)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Unable to copy to clipboard", error);
      });
  };
  return (
    <Button
      variant="ghost"
      onClick={username ? () => copyUsername(username) : () => copyPassword()}
      title="Copy to clipboard"
    >
      {copied ? (
        <div className="flex flex-col gap-1 items-center">
          <ClipboardCheck className="h-4 w-4 text-green-500 animate-accordion-up" />
          <p className="text-[10px] text-green-500">Copied!</p>
        </div>
      ) : (
        <Clipboard className="h-4 w-4 text-neutral-500 hover:text-neutral-200" />
      )}
    </Button>
  );
};

export default CopyButton;

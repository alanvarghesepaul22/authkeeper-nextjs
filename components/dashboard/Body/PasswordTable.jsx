"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import PasswordInput from "./PasswordInput";
import ActionDropdownMenu from "./ActionDropdownMenu";
import CopyButton from "./CopyButton";

const PasswordTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getPassword = async () => {
      await fetch("/api/addNewPass", {
        cache: "no-store",
      })
        .then(async (res) => {
          const data = await res.json();
          setData(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getPassword();
  }, []);
  return (
    <div className=" p-3 md:p-6">
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[70px]">SI No</TableHead>
            <TableHead>Website Name</TableHead>
            <TableHead>Username / Email</TableHead>
            <TableHead>Password</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((password, index) => {
            return (
              <TableRow key={index}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{password.siteName}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <p className="w-28" id="siteName">
                      {password.username}
                    </p>
                    <CopyButton username={password.username} />
                  </div>
                </TableCell>
                <TableCell className="flex items-center">
                  <PasswordInput val={password.password} ivVal={password.iv} />
                  <CopyButton val={password.password} ivVal={password.iv} />
                </TableCell>
                <TableCell>
                  <ActionDropdownMenu id={password._id} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default PasswordTable;

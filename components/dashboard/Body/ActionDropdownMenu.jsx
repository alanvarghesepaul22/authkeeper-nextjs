import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import EditBtn from "./EditBtn";

const ActionDropdownMenu = ({id}) => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const getPasswordById = async (id) => {
  //     await fetch(`http://localhost:3000/api/addNewPass/${id}`, {
  //       catch: "no-store",
  //     })
  //       .then(async (res) => {
  //         const data = await res.json();
  //         setData(data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };
  //   getPasswordById(id);
  // }, []);

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {/* <DropdownMenuItem asChild> */}
            <EditBtn id={id} />
          {/* </DropdownMenuItem> */}
          <DropdownMenuItem>Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ActionDropdownMenu;

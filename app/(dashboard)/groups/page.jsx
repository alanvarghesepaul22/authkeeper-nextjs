import { DataTable } from "@/components/dashboard/Body/DataTable";
import NewGroupBtn from "@/components/dashboard/Body/NewGroupBtn";
import PageTitle from "@/components/dashboard/Body/PageTitle";
import React from "react";

const page = () => {
  return (
    <div className="px-2 md:px-7">
      <PageTitle title="Groups">
        <NewGroupBtn variant="outline" title="Add new" />
      </PageTitle>
      <DataTable />
    </div>
  );
};

export default page;

import { DataTable } from "@/components/dashboard/Body/DataTable";
import PageTitle from "@/components/dashboard/Body/PageTitle";
import AddNewBtn from "@/components/dashboard/sidebar/AddNewBtn";
import React from "react";

const page = () => {
  return (
    <div className="px-2 md:px-7">
      <PageTitle title="Dashboard">
        <AddNewBtn variant="outline" title="Add new" />
      </PageTitle>
      <DataTable />
    </div>
  );
};

export default page;

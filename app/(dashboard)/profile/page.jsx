import PageTitle from "@/components/dashboard/Body/PageTitle";
import AddNewBtn from "@/components/dashboard/sidebar/AddNewBtn";
import React from "react";

const page = () => {
  return (
    <div className="px-2 md:px-7">
      <PageTitle title="Profile">
        <AddNewBtn variant="outline" title="Add new" />
      </PageTitle>
    </div>
  );
};

export default page;

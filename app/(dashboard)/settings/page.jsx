import PageTitle from "@/components/dashboard/Body/PageTitle";
import { SettingsTabs } from "@/components/dashboard/Settings/SettingsTabs";
import React from "react";

const page = () => {
  return (
    <div className="px-2 md:px-7">
      <PageTitle title="Settings"></PageTitle>
      <div className="px-2 my-10">
        <SettingsTabs />
      </div>
    </div>
  );
};

export default page;

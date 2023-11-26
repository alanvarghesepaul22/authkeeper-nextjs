import PageTitle from "@/components/dashboard/Body/PageTitle";
import { ProfileForm } from "@/components/dashboard/Profile/ProfileForm";
import React from "react";

const page = () => {
  return (
    <div className="px-2 md:px-7">
      <PageTitle title="Profile"></PageTitle>
      <div className="md:w-3/4 lg:w-2/4 px-2 my-10">
        <ProfileForm />
      </div>
    </div>
  );
};

export default page;

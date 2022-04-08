import React from "react";

// components

import UserCardEdit from "components/Cards/UserCardEdit.js";
import UserCardProfile from "components/Cards/UserCardProfile.js";

// layout for page

import Admin from "layouts/Admin.js";
import { useRouter } from "next/router";

export default function Edit() {
  const router = useRouter();
  const { id } = router.query;
  const user = router.query;
  console.log(user);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <UserCardEdit title={`Edit ${id} user`} user = {user} />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <UserCardProfile />
        </div>
      </div>
    </>
  );
}

Edit.layout = Admin;

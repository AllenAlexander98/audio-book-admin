import React from "react";

// components

import CardUsersTable from "components/Cards/CardUsersTable.js";

// layout for page

import Admin from "layouts/Admin.js";

export default function Index() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardUsersTable title="Users"/>
        </div>
        {/* <div className="w-full mb-12 px-4">
          <CardUsersTable color="dark" title="Users" />
        </div> */}
      </div>
    </>
  );
}

Index.layout = Admin;

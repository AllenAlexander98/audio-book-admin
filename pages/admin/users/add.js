import React from "react";

// components

import UserCardSettings from "components/Cards/UserCardSettings.js";
import UserCardProfile from "components/Cards/UserCardProfile.js";

// layout for page

import Admin from "layouts/Admin.js";

export default function Add() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <UserCardSettings title="Add new user" />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <UserCardProfile />
        </div>
      </div>
    </>
  );
}

Add.layout = Admin;

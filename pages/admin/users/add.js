import React from "react";

// components

import UserCardSettings from "components/Cards/UserCardSettings";
import UserCardProfile from "components/Cards/UserCardProfile";

// layout for page

import Admin from "layouts/Admin";

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

import React from "react";

// components

import CardSettings from "components/Cards/CardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";

// layout for page

import Admin from "layouts/Admin.js";

export default function Add() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardSettings title="Add new book" />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div>
      </div>
    </>
  );
}

Add.layout = Admin;

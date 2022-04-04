import React from "react";
import { format, formatDistance, formatRelative, subDays } from "date-fns";

// components

import CategoryCardTable from "components/Cards/CategoryCardTable.js";
import CategoryCardTableInfor from "components/Cards/CategoryCardTableInInfor";
// layout for page

import Admin from "layouts/Admin.js";

const categories = [
  {
    id: 1,
    name: "Category 1",
    status: "pending",
    user: {
      name: "david",
      date: formatRelative(subDays(new Date(), 3), new Date()),
    },
  },
  {
    id: 2,
    name: "Category 2",
    status: "active",
    user: {
      name: "david",
      date: formatRelative(subDays(new Date(), 3), new Date()),
    },
  },
  {
    id: 3,
    name: "Category 1",
    status: "pending",
    user: {
      name: "david",
      date: formatRelative(subDays(new Date(), 3), new Date()),
    },
  },
  {
    id: 4,
    name: "Category 2",
    status: "active",
    user: {
      name: "david",
      date: formatRelative(subDays(new Date(), 3), new Date()),
    },
  },
  {
    id: 5,
    name: "Category 1",
    status: "pending",
    user: {
      name: "david",
      date: formatRelative(subDays(new Date(), 3), new Date()),
    },
  },
  {
    id: 6,
    name: "Category 2",
    status: "active",
    user: {
      name: "david",
      date: formatRelative(subDays(new Date(), 3), new Date()),
    },
  },
];

export default function Index() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CategoryCardTableInfor title="Categories" categories={categories} />
        </div>
        {/* <div className="w-full mb-12 px-4">
          <CategoryCardTable color="dark" title="Caretories" />
        </div> */}
      </div>
    </>
  );
}

Index.layout = Admin;

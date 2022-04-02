import React from "react";

// components

import CategoryCardTable from "components/Cards/CategoryCardTable.js";

// layout for page

import Admin from "layouts/Admin.js";

const categories = [
  {
    id: 1,
    name: "Category 1",
  },
  {
    id: 2,
    name: "Category 2",
  },
];

export default function Index() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CategoryCardTable title="Caretories" categories={categories} />
        </div>
        {/* <div className="w-full mb-12 px-4">
          <CategoryCardTable color="dark" title="Caretories" />
        </div> */}
      </div>
    </>
  );
}

Index.layout = Admin;

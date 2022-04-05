import CategoryCardTable from "components/Cards/CategoryCardTable.js";
import Admin from "layouts/Admin.js";

const categories = [
  {
    id: 1,
    name: "Category 1",
    description: "Description 1",
  },
  {
    id: 2,
    name: "Category 2",
    description: "Description 2",
  },
  {
    id: 3,
    name: "Category 3",
    description: "Description 3",
  },
  {
    id: 4,
    name: "Category 4",
    description: "Description 4",
  },
  {
    id: 5,
    name: "Category 5",
    description: "Description 5",
  },
  {
    id: 6,
    name: "Category 6",
    description: "Description 6",
  },
  {
    id: 1,
    name: "Category 1",
    description: "Description 1",
  },
  {
    id: 2,
    name: "Category 2",
    description: "Description 2",
  },
  {
    id: 3,
    name: "Category 3",
    description: "Description 3",
  },
  {
    id: 4,
    name: "Category 4",
    description: "Description 4",
  },
  {
    id: 5,
    name: "Category 5",
    description: "Description 5",
  },
  {
    id: 6,
    name: "Category 6",
    description: "Description 6",
  },
];

export default function Index() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CategoryCardTable title="Categories" categories={categories} />
        </div>
      </div>
    </>
  );
}

Index.layout = Admin;

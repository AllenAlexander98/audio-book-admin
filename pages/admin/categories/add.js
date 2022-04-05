import CategoryCardSettings from "components/Cards/CategoryCardSettings.js";
import Admin from "layouts/Admin.js";

export default function Add() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <CategoryCardSettings title="Add new category" />
        </div>
      </div>
    </>
  );
}

Add.layout = Admin;

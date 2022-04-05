import CategoryCardSettings from "components/Cards/CategoryCardSettings.js";
import Admin from "layouts/Admin.js";
import { useRouter } from "next/router";

const category = {
  id: 1,
  name: "Category 1",
  description: "Description 1",
};

export default function Edit() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <CategoryCardSettings
            title={`Edit ${id} category`}
            category={category}
          />
        </div>
      </div>
    </>
  );
}

Edit.layout = Admin;

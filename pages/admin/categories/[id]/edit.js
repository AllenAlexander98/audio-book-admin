import CategoryCardSettings from "components/Cards/CategoryCardSettings.js";
import Admin from "layouts/Admin.js";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

export default function Edit() {
  const router = useRouter();
  const { id } = router.query;
  const { jwt } = useSelector((state) => state.storeManage);
  const [category, setCategory] = useState({});

  useEffect(() => {
    if (jwt == "null") return router.push("/auth/login");
    async function getCategory() {
      if (id != undefined) {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/categories/${id}`,
          {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          }
        );
        if (res.status == 200) {
          if (res.data.success == true) {
            const data = res.data.data;
            setCategory(data);
          }
        }
      }
    }
    getCategory();
  }, [id]);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <CategoryCardSettings
            title={`Edit ${id} category`}
            category={category}
            jwt={jwt}
            router={router}
          />
        </div>
      </div>
    </>
  );
}

Edit.layout = Admin;

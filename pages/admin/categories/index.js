import CategoryCardTable from "components/Cards/CategoryCardTable";
import Admin from "layouts/Admin";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

export default function Index() {
  const router = useRouter();
  const { jwt } = useSelector((state) => state.storeManage);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    if (jwt == "null") return router.push("/auth/login");
    async function getCategories() {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/categories`
      );
      if (res.status == 200) {
        if (res.data.success == true) {
          const data = res.data.data;
          setCategories(data);
        }
      }
    }
    getCategories();
  }, [jwt]);
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

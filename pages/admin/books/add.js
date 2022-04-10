import BookCardSettings from "components/Cards/BookCardSettings";
import Admin from "layouts/Admin";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

export default function Add() {
  const router = useRouter();
  const { id } = router.query;
  const { jwt } = useSelector((state) => state.storeManage);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    if (jwt == "null") return router.push("/auth/login");
    async function getInfo() {
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
    getInfo();
  }, [id]);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <BookCardSettings
            title={`Add new book`}
            id={id}
            categories={categories}
            jwt={jwt}
            router={router}
          />
        </div>
      </div>
    </>
  );
}

Add.layout = Admin;

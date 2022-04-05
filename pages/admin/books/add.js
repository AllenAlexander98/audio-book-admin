import BookCardSettings from "components/Cards/BookCardSettings";

import Admin from "layouts/Admin.js";
import { useRouter } from "next/router";

export default function Add() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <BookCardSettings title={`Add new book`} id={id} />
        </div>
      </div>
    </>
  );
}

Add.layout = Admin;

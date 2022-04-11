import UserCardSettings from "components/Cards/UserCardSettings";
import Admin from "layouts/Admin";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export default function Add() {
  const router = useRouter();
  const { jwt } = useSelector((state) => state.storeManage);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <UserCardSettings title="Add new user" jwt={jwt} router={router} />
        </div>
      </div>
    </>
  );
}

Add.layout = Admin;

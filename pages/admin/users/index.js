import UserCardTable from "components/Cards/UserCardTable";
import Admin from "layouts/Admin";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

export default function Index() {
  const router = useRouter();
  const { jwt } = useSelector((state) => state.storeManage);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (jwt == "null") return router.push("/auth/login");
    async function getUsers() {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      if (res.status == 200) {
        if (res.data.success == true) {
          const data = res.data.data;
          setUsers(data);
        }
      }
    }
    getUsers();
  }, [jwt]);
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <UserCardTable title="Users" users={users} />
        </div>
      </div>
    </>
  );
}

Index.layout = Admin;

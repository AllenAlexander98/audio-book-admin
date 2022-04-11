import UserCardSettings from "components/Cards/UserCardSettings";
import UserCardProfile from "components/Cards/UserCardProfile";
import Admin from "layouts/Admin";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

export default function Edit() {
  const router = useRouter();
  const { id } = router.query;
  const { jwt } = useSelector((state) => state.storeManage);
  const [user, setUser] = useState({});

  useEffect(() => {
    if (jwt == "null") return router.push("/auth/login");
    async function getUser() {
      if (id != undefined) {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/users/${id}`,
          {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          }
        );
        if (res.status == 200) {
          if (res.data.success == true) {
            const data = res.data.data;
            setUser(data);
          }
        }
      }
    }
    getUser();
  }, [id]);

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <UserCardSettings
            title={`Edit ${user.email}`}
            user={user}
            jwt={jwt}
            router={router}
          />
        </div>
        {/* <div className="w-full lg:w-4/12 px-4">
          <UserCardProfile />
        </div> */}
      </div>
    </>
  );
}

Edit.layout = Admin;

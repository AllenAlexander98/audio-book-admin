import AudioCardTable from "components/Cards/AudioCardTable";
import Admin from "layouts/Admin";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

export default function Index() {
  const router = useRouter();
  const { id } = router.query;
  const { jwt } = useSelector((state) => state.storeManage);
  const [audios, setAudios] = useState([]);
  useEffect(() => {
    if (jwt == "null") return router.push("/auth/login");
    async function getAudios() {
      if (id != undefined) {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/books/${id}/audios`
        );
        if (res.status == 200) {
          if (res.data.success == true) {
            const data = res.data.data.audios;
            setAudios(data);
          }
        }
      }
    }
    getAudios();
  }, [id]);
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <AudioCardTable title="Audio" audios={audios} />
        </div>
      </div>
    </>
  );
}

Index.layout = Admin;

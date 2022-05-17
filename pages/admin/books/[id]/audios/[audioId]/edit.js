import AudioCardSettings from "components/Cards/AudioCardSettings";
import Admin from "layouts/Admin";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

export default function Edit() {
  const router = useRouter();
  const { id, audioId } = router.query;
  const { jwt } = useSelector((state) => state.storeManage);
  const [audio, setAudio] = useState({});

  useEffect(() => {
    if (jwt == "null") return router.push("/auth/login");
    async function getAudio() {
      if (id != undefined) {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/books/${id}/audios/${audioId}`
        );
        if (res.status == 200) {
          if (res.data.success == true) {
            const data = res.data.data.audio;
            setAudio(data);
          }
        }
      }
    }
    getAudio();
  }, [id]);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <AudioCardSettings
            title={`Add new book`}
            id={id}
            audio={audio}
            jwt={jwt}
            router={router}
          />
        </div>
      </div>
    </>
  );
}

Edit.layout = Admin;

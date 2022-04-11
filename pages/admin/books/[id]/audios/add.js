import AudioCardSettings from "components/Cards/AudioCardSettings";
import Admin from "layouts/Admin";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export default function AddNewAudio() {
  const router = useRouter();
  const { id } = router.query;
  const { jwt } = useSelector((state) => state.storeManage);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <AudioCardSettings
            title={`Add new book`}
            id={id}
            jwt={jwt}
            router={router}
          />
        </div>
      </div>
    </>
  );
}

AddNewAudio.layout = Admin;

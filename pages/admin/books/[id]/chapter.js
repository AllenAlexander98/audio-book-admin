import ChapterCardSettings from "components/Cards/ChapterCardSettings";

import Admin from "layouts/Admin.js";
import { useRouter } from "next/router";

const chapterInfo = {
  id: 1,
  name: "Chapter 1",
  url: "",
};

export default function Chapter() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <ChapterCardSettings
            title={`Edit ${chapterInfo.name}`}
            id={id}
            chapterInfo={chapterInfo}
          />
        </div>
      </div>
    </>
  );
}

Chapter.layout = Admin;

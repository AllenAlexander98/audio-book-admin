import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function ChapterCardSettings({ title, id, chapterInfo }) {
  const [chapterName, setChapterName] = useState(chapterInfo?.name ?? "");
  const [chapterUrl, setChapterUrl] = useState(chapterInfo?.url ?? "");

  useEffect(() => {
    if (id) {
      fetchChapterDetail(id);
    }
  }, [id]);

  const fetchChapterDetail = (id) => {
    //Call api get book detail
  };

  const onSubmit = () => {
    const chapterInfo = {
      name: chapterName,
      url: chapterUrl,
    };

    if (id) {
      //Call api update book
      toast.success(`Update chapter ${id} success!`);
    } else {
      //Call api add new book
      toast.success("Add chapter success!");
    }
  };

  const onDelete = (id) => {
    toast.success(`Delete chapter ${id} success!`);
  };

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">
              {title ?? "Chapter"}
            </h6>
            <div>
              <button
                className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => onSubmit()}
              >
                Save
              </button>
              <button
                className="bg-red-500 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => onDelete(id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Chapter Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="chapter-name"
                  >
                    Name
                  </label>
                  <input
                    id="chapter-name"
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={chapterName}
                    placeholder="Enter name"
                    onChange={(e) => setChapterName(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4"></div>
              <div className="w-full lg:w-6/12 px-4">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="chapter-url"
                >
                  Url
                </label>
                <input
                  id="chapter-url"
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  value={chapterUrl}
                  placeholder="Enter url"
                  onChange={(e) => setChapterUrl(e.target.value)}
                />
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="chapter-file"
                >
                  Url by file
                </label>
                <input
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  type="file"
                  accept="audio/mp3,audio/*;capture=microphone"
                  id="chapter-file"
                  onChange={(e) => {
                    if (e.target.files[0]) {
                      setChapterUrl(URL.createObjectURL(e.target.files[0]));
                    }
                  }}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

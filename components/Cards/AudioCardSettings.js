import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { readFileAsync } from "../../lib/Helper";

export default function AudioCardSettings({ title, id, audio, jwt, router }) {
  const [name, setName] = useState("");
  const [audioUrl, setAudioUrl] = useState("");
  const [fileUploadAudio, setFileUploadAudio] = useState(null);

  useEffect(() => {
    setName(audio?.name ?? "");
    setAudioUrl(audio?.url ?? "");
  }, [audio]);

  const handleSubmit = async () => {
    if (audioUrl == "" && fileUploadAudio == null) {
      toast.error("Please upload audio file");
      return;
    }
    if (name == "") {
      toast.error("Please enter a name");
      return;
    }

    const result = null;
    if (fileUploadAudio == null) {
      result = audioUrl;
    } else {
      result = await readFileAsync(fileUploadAudio);
    }
    if (audio?._id) {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/books/${id}/audios/${audio._id}`,
        { name, url: result },
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );

      if (res.status == 200) {
        if (res.data.success == true) {
          toast.success(res.data.message);
          router.push(`/admin/books/${id}/audios`);
        }
      }
    } else {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/books/${id}/audios`,
        { name, url: result },
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );

      if (res.status == 200) {
        if (res.data.success == true) {
          toast.success(res.data.message);
          router.push(`/admin/books/${id}/audios`);
        }
      }
    }
  };

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-gray-700 text-xl font-bold">
              {title ?? "Chapter"}
            </h6>
            <div>
              <button
                className="bg-gray-700 active:bg-gray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => handleSubmit()}
              >
                Save
              </button>
            </div>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <h6 className="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Chapter Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-600 text-xs font-bold mb-2"
                    htmlFor="chapter-name"
                  >
                    Name
                  </label>
                  <input
                    id="chapter-name"
                    type="text"
                    className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={name}
                    placeholder="Enter name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4"></div>
              <div className="w-full lg:w-6/12 px-4">
                <label
                  className="block uppercase text-gray-600 text-xs font-bold mb-2"
                  htmlFor="chapter-url"
                >
                  Url
                </label>
                <input
                  id="chapter-url"
                  type="text"
                  className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  value={audioUrl}
                  placeholder="Enter url"
                  onChange={(e) => setAudioUrl(e.target.value)}
                />
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <label
                  className="block uppercase text-gray-600 text-xs font-bold mb-2"
                  htmlFor="chapter-file"
                >
                  Url by file
                </label>
                <input
                  className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  type="file"
                  accept="audio/*"
                  id="chapter-file"
                  onChange={(e) => {
                    if (e.target.files[0]) {
                      setFileUploadAudio(e.target.files[0]);
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

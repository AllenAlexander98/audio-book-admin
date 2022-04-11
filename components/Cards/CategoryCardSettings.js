import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export default function CategoryCardSettings({ title, category, jwt, router }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = async () => {
    if (category?._id) {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/categories/${category._id}`,
        { name, description },
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );

      if (res.status == 200) {
        if (res.data.success == true) {
          toast.success(res.data.message);
          router.push("/admin/categories");
        }
      }
    } else {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/categories`,
        { name, description },
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );

      if (res.status == 200) {
        if (res.data.success == true) {
          toast.success(res.data.message);
          router.push("/admin/categories");
        }
      }
    }
  };

  useEffect(() => {
    setName(category?.name ?? "");
    setDescription(category?.description ?? "");
  }, [category]);
  return (
    <>
      <div>
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-100 border-0">
          <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-gray-700 text-xl font-bold">
                {title ?? "My account"}
              </h6>
              <button
                className="bg-gray-700 active:bg-gray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="submit"
                onClick={() => handleSubmit()}
              >
                Save
              </button>
            </div>
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <h6 className="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Category Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Description
                  </label>
                  <textarea
                    type="text"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    rows="4"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

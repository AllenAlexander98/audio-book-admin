import GetCategoryDropdown from "components/Dropdowns/GetCategoryDropdown";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { readFileAsync } from "../../lib/Helper";

export default function BookCardSettings({
  title,
  book,
  categories,
  jwt,
  router,
}) {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [isVip, setIsVip] = useState(false);
  const [prices, setPrices] = useState(0);
  const [description, setDescription] = useState("");
  const [channel, setChannel] = useState("");
  const [thumbnail, setThumbnail] = useState("/img/placeholder.png");
  const [fileUploadThumbnail, setFileUploadThumbnail] = useState(null);

  useEffect(() => {
    setName(book?.name ?? "");
    setAuthor(book?.author ?? "");
    setCategory(book?.categoryId?.name ?? "");
    setCategoryId(book?.categoryId?._id ?? "");
    setIsVip(book?.isVip ?? false);
    setPrices(book?.prices ?? 0);
    setDescription(book?.description ?? "");
    setChannel(book?.channel ?? "");
    setThumbnail(book?.thumbnail ?? "/img/placeholder.png");
  }, [book]);

  const handleSubmit = async () => {
    if (thumbnail == "/img/placeholder.png") {
      toast.error("Please upload a thumbnail");
      return;
    }
    if (categoryId == "") {
      toast.error("Please select a category");
      return;
    }
    if (name == "") {
      toast.error("Please enter a name");
      return;
    }

    const resultThumbnail = null;
    if (fileUploadThumbnail == null) {
      resultThumbnail = thumbnail;
    } else {
      resultThumbnail = await readFileAsync(fileUploadThumbnail);
    }
    if (book?._id) {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/books/${book._id}`,
        {
          name,
          author,
          categoryId,
          isVip,
          prices,
          description,
          channel,
          thumbnail: resultThumbnail,
        },
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );

      if (res.status == 200) {
        if (res.data.success == true) {
          toast.success(res.data.message);
          router.push("/admin/books");
        }
      }
    } else {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/books`,
        {
          name,
          author,
          categoryId,
          isVip,
          prices,
          description,
          channel,
          thumbnail: resultThumbnail,
        },
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );

      if (res.status == 200) {
        if (res.data.success == true) {
          toast.success(res.data.message);
          router.push("/admin/books");
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
              {title ?? "My account"}
            </h6>
            <button
              className="bg-gray-700 active:bg-gray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => handleSubmit()}
            >
              Save
            </button>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <h6 className="text-gray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Book Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="lg:w-4/12 relative w-full mb-3 book-image">
                  <label
                    htmlFor="book-image"
                    className="form-label inline-block mb-2 text-gray-700 cursor-pointer"
                  >
                    <span className="block uppercase text-gray-600 text-xs font-bold mb-2">
                      Thumbnail
                    </span>
                    <img src={thumbnail} alt="Image" />
                  </label>
                  <input
                    className="hidden form-control w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    type="file"
                    accept="image/*"
                    id="book-image"
                    onChange={(e) => {
                      if (e.target.files[0]) {
                        setThumbnail(URL.createObjectURL(e.target.files[0]));
                        setFileUploadThumbnail(e.target.files[0]);
                      }
                    }}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-600 text-xs font-bold mb-2"
                    htmlFor="book-title"
                  >
                    Name
                  </label>
                  <input
                    id="book-title"
                    type="text"
                    className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={name}
                    placeholder="Enter name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-600 text-xs font-bold mb-2"
                    htmlFor="book-author"
                  >
                    Author
                  </label>
                  <input
                    id="book-author"
                    type="text"
                    className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Enter author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-600 text-xs font-bold mb-2"
                    htmlFor="isVip"
                  >
                    isVip
                  </label>
                  <div>
                    <label className="flex items-center cursor-pointer w-9">
                      <input
                        id="isVip"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-gray-700 ml-1 w-9 h-9 m-1 ease-linear transition-all duration-150 cursor-pointer"
                        onChange={() => {
                          setIsVip(!isVip);
                        }}
                        value={isVip}
                        checked={isVip}
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-600 text-xs font-bold mb-2"
                    htmlFor="book-price"
                  >
                    Prices
                  </label>
                  <input
                    id="book-price"
                    type="number"
                    className={`border-0 px-3 py-3 placeholder-gray-300 text-gray-600 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ${
                      isVip == true ? "bg-white" : "bg-gray-100"
                    }`}
                    value={prices}
                    min={0}
                    onChange={(e) => setPrices(e.target.value)}
                    disabled={isVip == true ? false : true}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-600 text-xs font-bold mb-2"
                    htmlFor="book-channel"
                  >
                    Channel
                  </label>
                  <input
                    id="book-channel"
                    type="text"
                    className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Enter channel"
                    value={channel}
                    onChange={(e) => setChannel(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-600 text-xs font-bold mb-2"
                    htmlFor="book-category"
                  >
                    Category
                  </label>
                  <GetCategoryDropdown
                    label="Select a category"
                    categories={categories}
                    category={category}
                    setCategory={setCategory}
                    setCategoryId={setCategoryId}
                  />
                </div>
              </div>
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-600 text-xs font-bold mb-2"
                    htmlFor="book-description"
                  >
                    Description
                  </label>
                  <textarea
                    id="book-description"
                    className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    rows="4"
                    placeholder="Enter description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

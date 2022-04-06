import GetCategoryDropdown from "components/Dropdowns/GetCategoryDropdown";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const categories = [
  {
    name: "Cat 1",
    id: "1",
  },
  {
    name: "Cat 2",
    id: "2",
  },
  {
    name: "Cat 3",
    id: "3",
  },
  {
    name: "Cat 4",
    id: "4",
  },
];

export default function BookCardSettings({ title, id, bookInfo }) {
  const [bookName, setBookName] = useState(bookInfo?.name ?? "");
  const [bookAuthor, setBookAuthor] = useState(bookInfo?.author ?? "");
  const [bookCategory, setBookCategory] = useState(bookInfo?.category ?? "");
  const [bookPrices, setBookPrices] = useState(bookInfo?.prices ?? 0);
  const [bookDescription, setBookDescription] = useState(
    bookInfo?.description ?? ""
  );
  const [bookThumbnail, setBookThumbnail] = useState(
    bookInfo?.thumbnail ?? "/img/placeholder.png"
  );

  useEffect(() => {
    if (id) {
      fetchBookDetail(id);
    }
  }, [id]);

  const fetchBookDetail = (id) => {
    //Call api get book detail
  };

  const onSubmit = () => {
    const bookInfo = {
      name: bookName,
      description: bookDescription,
      thumbnail: bookThumbnail,
      author: bookAuthor,
      category: bookCategory,
      prices: bookPrices,
    };

    if (id) {
      //Call api update book
      toast.success("Update book success!");
    } else {
      //Call api add new book
      toast.success("Add book success!");
    }
  };

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">
              {title ?? "My account"}
            </h6>
            <button
              className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => onSubmit()}
            >
              Save
            </button>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Book Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="lg:w-4/12 relative w-full mb-3 book-image">
                  <label
                    htmlFor="book-image"
                    className="form-label inline-block mb-2 text-gray-700 cursor-pointer"
                  >
                    <span className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      Thumbnail
                    </span>
                    <img src={bookThumbnail} alt="Image" />
                  </label>
                  <input
                    className="hidden form-control w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    type="file"
                    id="book-image"
                    onChange={(e) => {
                      if (e.target.files[0]) {
                        setBookThumbnail(URL.createObjectURL(e.target.files[0]));
                      }
                    }}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="book-title"
                  >
                    Name
                  </label>
                  <input
                    id="book-title"
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={bookName}
                    placeholder="Enter name"
                    onChange={(e) => setBookName(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="book-author"
                  >
                    Author
                  </label>
                  <input
                    id="book-author"
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Enter author"
                    value={bookAuthor}
                    onChange={(e) => setBookAuthor(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="book-price"
                  >
                    Prices
                  </label>
                  <input
                    id="book-price"
                    type="number"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={bookPrices}
                    min={0}
                    onChange={(e) => setBookPrices(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="book-duration"
                  >
                    Category
                  </label>
                  <GetCategoryDropdown
                    label="Select a category"
                    categories={categories}
                    action={(value) => setBookCategory(value)}
                  />
                </div>
              </div>
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="book-description"
                  >
                    Description
                  </label>
                  <textarea
                    id="book-description"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    rows="4"
                    placeholder="Enter description"
                    value={bookDescription}
                    onChange={(e) => setBookDescription(e.target.value)}
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

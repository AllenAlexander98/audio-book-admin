import React, { useState } from "react";
import CategoryDropdown from "components/Dropdowns/CategoryDropdown";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// components

export default function BookCardSettings({ title }) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredCategory, setEnteredCategory] = useState("");
  // const notify = () => {
  //   toast("Default Notification !");

  //   toast.success("Success Notification !", {
  //     position: toast.POSITION.TOP_CENTER,
  //   });

  //   toast.error("Error Notification !", {
  //     position: toast.POSITION.TOP_LEFT,
  //   });

  //   toast.warn("Warning Notification !", {
  //     position: toast.POSITION.BOTTOM_LEFT,
  //   });

  //   toast.info("Info Notification !", {
  //     position: toast.POSITION.BOTTOM_CENTER,
  //   });

  //   toast("Custom Style Notification with css class!", {
  //     position: toast.POSITION.BOTTOM_RIGHT,
  //     className: "foo-bar",
  //   });
  // };

  const notifySuccess = () => {
    toast.success("Added New Book !", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1000,
    });
  };

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const authorChangeHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
  };

  const saveCategoryHandler = (enteredCategoryData) => {
    setEnteredCategory(enteredCategoryData);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredData = {
      name: enteredName,
      author: enteredAuthor,
      description: enteredDescription,
      price: enteredPrice,
      category: enteredCategory,
    };

    console.log(enteredData);
    setEnteredName("");
    setEnteredAuthor("");
    setEnteredDescription("");
    setEnteredPrice("");
    notifySuccess();
  };

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">
              {title ?? "My account"}
            </h6>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form onSubmit={submitHandler}>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Book Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Name
                  </label>
                  <input
                    value={enteredName}
                    onChange={nameChangeHandler}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Author
                  </label>
                  <input
                    value={enteredAuthor}
                    onChange={authorChangeHandler}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Category
                  </label>
                  <CategoryDropdown
                    options={["Action", "Life Style", "Health", "Economic"]}
                    onSaveCategory={saveCategoryHandler}
                  ></CategoryDropdown>
                </div>
              </div>
            </div>

            {/* <div className="flex flex-wrap"> */}
            <div>
              <div className="w-full lg:w-8/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Description
                  </label>
                  <textarea
                    value={enteredDescription}
                    onChange={descriptionChangeHandler}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    rows="3"
                  ></textarea>
                </div>
              </div>

              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Price
                  </label>
                  <input
                    value={enteredPrice}
                    onChange={priceChangeHandler}
                    type="number"
                    min="1000"
                    step="1000"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="Postal Code"
                  />
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-1 font-bold uppercase">
              Thumbnail
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3"></div>
              </div>
            </div>
            <div>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
            <div className="py-3 bg-gray-50 text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save
              </button>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </>
  );
}

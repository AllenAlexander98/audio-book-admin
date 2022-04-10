import { createPopper } from "@popperjs/core";
import { createRef, useState } from "react";

const GetCategoryDropdown = ({
  label,
  categories,
  category,
  setCategory,
  setCategoryId,
}) => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const btnDropdownRef = createRef();
  const popoverDropdownRef = createRef();

  const openDropdownPopover = () => {
    setDropdownPopoverShow(true);
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-end",
    });
  };

  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  return (
    <>
      <a
        className="cursor-pointer border-0 shadow ease-linear transition-all rounded duration-150 bg-white focus:outline-none hover:text-blueGray-500 text-blueGray-700 px-3 py-3 flex items-center text-sm"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        {category || label}
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg w-full"
        }
      >
        <div>
          {categories.map((category, key) => (
            <a
              key={key}
              className={
                "cursor-pointer text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
              }
              onClick={() => {
                setDropdownPopoverShow(false);
                setCategory(category.name);
                setCategoryId(category._id);
              }}
            >
              {category.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default GetCategoryDropdown;

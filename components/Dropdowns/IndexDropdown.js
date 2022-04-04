import React from "react";
import { createPopper } from "@popperjs/core";

const IndexDropdown = (props) => {
  const { label, dropdownList, action } = props;
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const [dropdownValue, setDropdownValue] = React.useState(null);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();

  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };

  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  const showDropdownList = (list) =>
    list.map((item) => (
      <a
        href="#pablo"
        className={
          "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        }
        onClick={() => {
          setDropdownValue(item);
          setDropdownPopoverShow(false);
          action(item.id);
        }}
      >
        {item.name}
      </a>
    ));

  return (
    <>
      <a
        className="border-0 shadow ease-linear transition-all rounded duration-150 bg-white focus:outline-none hover:text-blueGray-500 text-blueGray-700 px-3 py-3 flex items-center text-sm"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        {(dropdownValue && dropdownValue.name) || label}
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg w-full"
        }
      >
        <div>{showDropdownList(dropdownList)}</div>
      </div>
    </>
  );
};

export default IndexDropdown;

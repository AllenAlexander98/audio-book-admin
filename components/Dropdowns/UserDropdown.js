import { createPopper } from "@popperjs/core";
import { useRouter } from "next/router";
import { createRef, useState } from "react";
import { useDispatch } from "react-redux";
import { updateJwt, updateUser } from "redux/storeManage";

const UserDropdown = () => {
  // dropdown props
  const dispatch = useDispatch();
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

  const router = useRouter();
  function handleLogout() {
    dispatch(updateJwt("null"));
    dispatch(updateUser("null"));
    router.push("/auth/login");
  }
  return (
    <>
      <a
        className="text-blueGray-500 block cursor-pointer"
        ref={btnDropdownRef}
        onClick={() => {
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="items-center flex">
          <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
            <img
              alt="..."
              className="w-full rounded-full align-middle border-none shadow-lg"
              src="/img/team-1-800x800.jpg"
            />
          </span>
        </div>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Action
        </a>
        <div className="h-0 my-2 border border-solid border-blueGray-100" />
        <a
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 cursor-pointer"
          }
          onClick={() => handleLogout()}
        >
          Logout
        </a>
      </div>
    </>
  );
};

export default UserDropdown;

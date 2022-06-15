import { createPopper } from "@popperjs/core";
import axios from "axios";
import Link from "next/link";
import { createRef, useState } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const BookDropdown = ({ router, id }) => {
  const { jwt } = useSelector((state) => state.storeManage);
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const btnDropdownRef = createRef();
  const popoverDropdownRef = createRef();
  const openDropdownPopover = () => {
    setDropdownPopoverShow(true);
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "left-start",
    });
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  const handleDelete = async (id) => {
    closeDropdownPopover();
    const path = router.pathname.replace("/admin/", "");
    console.log(path);
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton:
          "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-2",
        cancelButton:
          "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-2",
      },
      buttonsStyling: false,
    });

    const sweetAlert = swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    });
    const result = await sweetAlert;
    if (result.isConfirmed) {
      const res = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/${path}/${id}`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      if (res.status == 200) {
        if (res.data.success == true) {
          swalWithBootstrapButtons.fire(
            "Deleted!",
            res.data.message,
            "success"
          );
          setTimeout(function () {
            router.reload();
          }, 3000);
        }
      }
    }
  };

  return (
    <>
      <a
        className="text-gray-500 py-1 px-3 cursor-pointer"
        ref={btnDropdownRef}
        onClick={() => {
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <i className="fas fa-ellipsis-v"></i>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <Link href={`${router.pathname}/${id}/audios`}>
          <a
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700"
            }
          >
            Audio List
          </a>
        </Link>
        <Link href={`${router.pathname}/${id}/edit`}>
          <a
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700"
            }
          >
            Edit
          </a>
        </Link>
        <a
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 cursor-pointer"
          }
          onClick={() => {
            handleDelete(id);
          }}
        >
          Delete
        </a>
      </div>
    </>
  );
};

export default BookDropdown;

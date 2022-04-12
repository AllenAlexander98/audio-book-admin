import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

export default function UserCardSettings({ title, user, jwt, router }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isVip, setIsVip] = useState(new Date());
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLock, setIsLock] = useState(false);

  const handleSubmit = async () => {
    // return console.log(user.isAdmin, user.isLock);
    if (user?._id) {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/users/${user._id}`,
        { username, isVip, isAdmin, isLock },
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );

      if (res.status == 200) {
        if (res.data.success == true) {
          toast.success(res.data.message);
          router.push("/admin/users");
        }
      }
    } else {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/users`,
        { email, password, username, isVip, isAdmin, isLock },
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );

      if (res.status == 200) {
        if (res.data.success == true) {
          toast.success(res.data.message);
          router.push("/admin/users");
        }
      }
    }
  };

  useEffect(() => {
    setEmail(user?.email ?? "");
    setUsername(user?.username ?? "");
    setIsVip(moment(user?.isVip).local()._d ?? new Date());
    setIsAdmin(user?.isAdmin == 1 ? true : false);
    setIsLock(user?.isLock == 1 ? true : false);
  }, [user]);

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
              User Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-600 text-xs font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    className={`border-0 px-3 py-3 placeholder-gray-300 text-gray-600 ${
                      user?._id ? "bg-gray-100" : ""
                    } rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150`}
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={user?._id ? true : false}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-600 text-xs font-bold mb-2"
                    htmlFor="username"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>
              {!user?._id && (
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-600 text-xs font-bold mb-2"
                      htmlFor="password"
                    >
                      Username
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
              )}

              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-600 text-xs font-bold mb-2"
                    htmlFor="isVip"
                  >
                    isVip
                  </label>
                  <DatePicker
                    selected={isVip}
                    onChange={(date) => setIsVip(date)}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-600 text-xs font-bold mb-2"
                    htmlFor="isAdmin"
                  >
                    isAdmin
                  </label>
                  <div>
                    <label className="flex items-center cursor-pointer w-9">
                      <input
                        id="isAdmin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-gray-700 ml-1 w-9 h-9 m-1 ease-linear transition-all duration-150 cursor-pointer"
                        onChange={() => setIsAdmin(!isAdmin)}
                        value={isAdmin}
                        checked={isAdmin}
                        disabled={email == "admin@admin.com" ? true : false}
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-600 text-xs font-bold mb-2"
                    htmlFor="isLock"
                  >
                    isLock
                  </label>
                  <div>
                    <label className="flex items-center cursor-pointer">
                      <input
                        id="isLock"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-gray-700 ml-1 w-9 h-9 m-1 ease-linear transition-all duration-150 cursor-pointer"
                        onChange={() => setIsLock(!isLock)}
                        checked={isLock}
                        disabled={email == "admin@admin.com" ? true : false}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

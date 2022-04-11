import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";
import { updateJwt, updateUser } from "../../redux/storeManage";
import { useDispatch, useSelector } from "react-redux";
import { validateEmail } from "../../lib/Helper";

import Auth from "layouts/Auth";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { jwt } = useSelector((state) => state.storeManage);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    if (jwt != "null") {
      router.push("/admin/dashboard");
    }
  }, [jwt]);

  async function handleLogin() {
    if (validateEmail(email) == false || password == "") {
      toast.error("Invalid email or password");
      return;
    }

    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
      {
        email,
        password,
      }
    );

    if (res.status === 200) {
      if (res.data.success == true) {
        const data = res.data.data;
        dispatch(updateJwt(data.jwt));
        dispatch(updateUser(data.user));
        router.push("/admin/dashboard");
      } else {
        toast.error(res.data.message);
      }
    }
  }

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-gray-500 text-2xl font-bold">
                    Admin Login
                  </h6>
                </div>

                <hr className="mt-6 border-b-1 border-gray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email: admin@admin.com"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password: admin@admin.com"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                  </div>
                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-gray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                        onChange={() => setRememberMe(!rememberMe)}
                        value={rememberMe}
                      />
                      <span className="ml-2 text-sm font-semibold text-gray-600">
                        Remember me
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-gray-800 text-white active:bg-gray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => handleLogin()}
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Login.layout = Auth;

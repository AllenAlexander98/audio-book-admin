import React from "react";
import PropTypes from "prop-types";

// components

import TableDropdown from "components/Dropdowns/TableDropdown.js";
import { useRouter } from "next/router";

const users = [];

function fakedata() {
  var firstNames = ['Pilar', 'Kentrell', 'Octavio', 'Jade', 'Niya', 'Perry', 'Ryleigh', 'Wayne', 'Cedrick', 'Daron'];
  var lastNames = ['Brice', 'Jairo', 'Christopher', 'Mattie', 'Belen', 'Jessie', 'Albert', 'Talon', 'Mckenzie', 'Konnor'];
  var streets = ['Democracy', 'Department', 'Dimitri', 'Dock', 'Dubni', 'Easter', 'East Hills', 'Easy', 'Elgin', 'Elisabeth'];
  var districts = ['New York City, NY', 'Los Angeles, CA', 'Chicago, IL', 'Houston, TX', 'Phoenix, AZ', 'Philadelphia, PA', 'San Antonio, TX', 'San Diego, CA', 'Dallas, TX', 'San Jose, CA'];
  var states = ['New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'PennsylvaniaRhode Island', 'South Carolina'];

  for (let i = 0; i < 10; i++) {
    var firstName = firstNames[(Math.floor(Math.random() * 10))];
    var lastName = lastNames[(Math.floor(Math.random() * 10))];
    var street = streets[(Math.floor(Math.random() * 10))];
    var district = districts[(Math.floor(Math.random() * 10))];
    var state = states[(Math.floor(Math.random() * 10))];
    var no = Math.floor(Math.random() * 1000);

    var fullName = firstName + ' ' + lastName;
    var email = firstName + lastName + '@gmail.com';
    var address = no + ', ' + street + ', ' + district + ', ' + state;

    var user = {
      'firstName': firstName,
      'lastName': lastName,
      'fullName': fullName,
      'email': email,
      'address': address
    }

    users.push(user);
  }
}

const pageList = [];
const numPage = 10;

function createPageList(numPage) {
  for (let i = 0; i < numPage; i++) {
    pageList.push(i + 1);
  }
}


export default function CarduTable({ color, title}) {
  const router = useRouter();
  function handleAdd() {
    router.push(router.route + "/add");
  }
  fakedata();
  createPageList(numPage);
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                {title ?? "Card Tables"}
              </h3>
              <button
                className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => handleAdd()}
              >
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  User Name
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Email
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  First Name
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Last Name
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Address
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                ></th>
              </tr>
            </thead>

            {/* table data */}

            <tbody>
              {
                users.map(user => (
                  <tr>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {user.fullName}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {user.email}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {user.firstName}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {user.lastName}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {user.address}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                      <TableDropdown />
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>

      <div class="container flex justify-center mx-auto">
        <ul class="flex">
          <li><button class="px-4 py-2 text-gray-600 bg-white border border-gray-600">Prev</button>
          </li>

          {
            pageList.map(page =>
              <li><button class="px-4 py-2 text-gray-600 bg-white border border-gray-600 ">{page}</button>
              </li>
            )
          }
          <li><button class="px-4 py-2 text-gray-600 bg-white border border-gray-600">Next</button>
          </li>
        </ul>
      </div>
    </>
  );
}

CarduTable.defaultProps = {
  color: "light",
};

CarduTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};

import PropTypes from "prop-types";
import TableUserDropdown from "components/Dropdowns/TableUserDropdown.js";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "next/link";

const users = [
  {
    id: 1,
    firstName: "Wayne",
    lastName: "Albert",
    fullName: "Wayne Albert",
    email: "WayneAlbert@gmail.com",
    address: "234, Dimitri, San Diego, CA, New Jersey",
  },
  {
    id: 2,
    firstName: "Perry",
    lastName: "Mattie",
    fullName: "Perry Mattie",
    email: "PerryMattie@gmail.com",
    address: "224, Dimitri, San Jose, CA, Ohio",
  },
  {
    id: 3,
    firstName: "Niya",
    lastName: "Mattie",
    fullName: "Niya Mattie",
    email: "NiyaMattie@gmail.com",
    address: "713, Dimitri, New York City, NY, South Carolina",
  },
  {
    id: 4,
    firstName: "Jade",
    lastName: "Konnor",
    fullName: "Jade Konnor",
    email: "JadeKonnor@gmail.com",
    address: "787, Easy, Dallas, TX, North Dakota",
  },
  {
    id: 5,
    firstName: "Daron",
    lastName: "Mckenzie",
    fullName: "Daron Mckenzie",
    email: "DaronMckenzie@gmail.com",
    address: "167, Easter, New York City, NY, New Jersey",
  },
  {
    id: 6,
    firstName: "Ryleigh",
    lastName: "Talon",
    fullName: "Ryleigh Talon",
    email: "RyleighTalon@gmail.com",
    address: "304, Elgin, New York City, NY, North Carolina",
  },
  {
    id: 7,
    firstName: "Ryleigh",
    lastName: "Albert",
    fullName: "Ryleigh Albert",
    email: "RyleighAlbert@gmail.com",
    address: "818, Department, Dallas, TX, Oregon",
  },
  {
    id: 8,
    firstName: "Kentrell",
    lastName: "Belen",
    fullName: "Kentrell Belen",
    email: "KentrellBelen@gmail.com",
    address: "149, Dimitri, San Antonio, TX, North Carolina",
  },
  {
    id: 9,
    firstName: "Cedrick",
    lastName: "Talon",
    fullName: "Cedrick Talon",
    email: "CedrickTalon@gmail.com",
    address: "576, Dock, San Diego, CA, PennsylvaniaRhode Island",
  },
  {
    id: 10,
    firstName: "Wayne",
    lastName: "Jessie",
    fullName: "Wayne Jessie",
    email: "WayneJessie@gmail.com",
    address: "215, Easy, San Jose, CA, South Carolina",
  },
];
const pageList = [1, 2, 3, 4, 5, 6, 7];
const numPage = 10;
function fakeData() {
  var firstNames = [
    "Pilar",
    "Kentrell",
    "Octavio",
    "Jade",
    "Niya",
    "Perry",
    "Ryleigh",
    "Wayne",
    "Cedrick",
    "Daron",
  ];
  var lastNames = [
    "Brice",
    "Jairo",
    "Christopher",
    "Mattie",
    "Belen",
    "Jessie",
    "Albert",
    "Talon",
    "Mckenzie",
    "Konnor",
  ];
  var streets = [
    "Democracy",
    "Department",
    "Dimitri",
    "Dock",
    "Dubni",
    "Easter",
    "East Hills",
    "Easy",
    "Elgin",
    "Elisabeth",
  ];
  var districts = [
    "New York City, NY",
    "Los Angeles, CA",
    "Chicago, IL",
    "Houston, TX",
    "Phoenix, AZ",
    "Philadelphia, PA",
    "San Antonio, TX",
    "San Diego, CA",
    "Dallas, TX",
    "San Jose, CA",
  ];
  var states = [
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "PennsylvaniaRhode Island",
    "South Carolina",
  ];

  for (let i = 0; i < 10; i++) {
    var firstName = firstNames[Math.floor(Math.random() * 10)];
    var lastName = lastNames[Math.floor(Math.random() * 10)];
    var street = streets[Math.floor(Math.random() * 10)];
    var district = districts[Math.floor(Math.random() * 10)];
    var state = states[Math.floor(Math.random() * 10)];
    var no = Math.floor(Math.random() * 1000);

    var fullName = firstName + " " + lastName;
    var email = firstName + lastName + "@gmail.com";
    var address = no + ", " + street + ", " + district + ", " + state;

    var user = {
      firstName: firstName,
      lastName: lastName,
      fullName: fullName,
      email: email,
      address: address,
    };

    users.push(user);
  }
}

function createPageList(numPage) {
  for (let i = 0; i < numPage; i++) {
    pageList.push(i + 1);
  }
}

export default function UserCardTable({ color, title }) {
  const router = useRouter();

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
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
              <Link href={`${router.route}/add`}>
                <a className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                  Add
                </a>
              </Link>
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
              {users.map((user, key) => (
                <tr key={key}>
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
                    <TableUserDropdown router={router} id={user.id} user={user} users={users}/>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* <div className="container flex justify-center mx-auto">
        <ul className="flex">
          <li>
            <button className="px-4 py-2 text-gray-600 bg-white border border-gray-600">
              Prev
            </button>
          </li>

          {pageList.map((page, key) => (
            <li key={key}>
              <button className="px-4 py-2 text-gray-600 bg-white border border-gray-600 ">
                {page}
              </button>
            </li>
          ))}
          <li>
            <button className="px-4 py-2 text-gray-600 bg-white border border-gray-600">
              Next
            </button>
          </li>
        </ul>
      </div> */}
    </>
  );
}

UserCardTable.defaultProps = {
  color: "light",
};

UserCardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};

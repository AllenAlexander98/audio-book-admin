import PropTypes from 'prop-types';
import TableDropdown from 'components/Dropdowns/TableDropdown';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Link from 'next/link';

function createPageList(numPage) {
    for (let i = 0; i < numPage; i++) {
        pageList.push(i + 1);
    }
}

export default function UserCardTable({ color, title, users, pagination }) {
    const router = useRouter();

    return (
        <>
            <div
                className={
                    'relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded ' +
                    (color === 'light' ? 'bg-white' : 'bg-gray-700 text-white')
                }
            >
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3
                                className={
                                    'font-semibold text-lg ' + (color === 'light' ? 'text-gray-700' : 'text-white')
                                }
                            >
                                {title ?? 'Card Tables'}
                            </h3>
                        </div>
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                            <Link href={`${router.asPath}/add`}>
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
                                        'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                                        (color === 'light'
                                            ? 'bg-gray-50 text-gray-500 border-gray-100'
                                            : 'bg-gray-600 text-gray-200 border-gray-500')
                                    }
                                >
                                    Email
                                </th>
                                <th
                                    className={
                                        'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                                        (color === 'light'
                                            ? 'bg-gray-50 text-gray-500 border-gray-100'
                                            : 'bg-gray-600 text-gray-200 border-gray-500')
                                    }
                                >
                                    User Name
                                </th>
                                <th
                                    className={
                                        'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                                        (color === 'light'
                                            ? 'bg-gray-50 text-gray-500 border-gray-100'
                                            : 'bg-gray-600 text-gray-200 border-gray-500')
                                    }
                                >
                                    Avatar
                                </th>
                                <th
                                    className={
                                        'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                                        (color === 'light'
                                            ? 'bg-gray-50 text-gray-500 border-gray-100'
                                            : 'bg-gray-600 text-gray-200 border-gray-500')
                                    }
                                >
                                    VIP
                                </th>
                                <th
                                    className={
                                        'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                                        (color === 'light'
                                            ? 'bg-gray-50 text-gray-500 border-gray-100'
                                            : 'bg-gray-600 text-gray-200 border-gray-500')
                                    }
                                >
                                    Admin
                                </th>
                                <th
                                    className={
                                        'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                                        (color === 'light'
                                            ? 'bg-gray-50 text-gray-500 border-gray-100'
                                            : 'bg-gray-600 text-gray-200 border-gray-500')
                                    }
                                >
                                    Lock
                                </th>
                                <th
                                    className={
                                        'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                                        (color === 'light'
                                            ? 'bg-gray-50 text-gray-500 border-gray-100'
                                            : 'bg-gray-600 text-gray-200 border-gray-500')
                                    }
                                ></th>
                            </tr>
                        </thead>

                        {/* table data */}

                        <tbody>
                            {users.map((user, key) => (
                                <tr key={key}>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {user.email}
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {user.username}
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {user.avatarUrl}
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {user.isVip}
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {user.isAdmin}
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {user.isLock}
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                                        <TableDropdown router={router} id={user._id} />
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
                        <button className="px-4 py-2 text-gray-600 bg-white border border-gray-600">Prev</button>
                    </li>

                    {pageList.map((page, key) => (
                        <li key={key}>
                            <button className="px-4 py-2 text-gray-600 bg-white border border-gray-600 ">{page}</button>
                        </li>
                    ))}
                    <li>
                        <button className="px-4 py-2 text-gray-600 bg-white border border-gray-600">Next</button>
                    </li>
                </ul>
            </div> */}
        </>
    );
}

UserCardTable.defaultProps = {
    color: 'light',
};

UserCardTable.propTypes = {
    color: PropTypes.oneOf(['light', 'dark']),
};

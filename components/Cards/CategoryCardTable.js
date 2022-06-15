import { useState } from 'react';
import PropTypes from 'prop-types';
// import TablePagination from "@mui/material/TablePagination";
import TableDropdown from 'components/Dropdowns/TableDropdown';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Pagination } from '@mui/material';

export default function CategoryCardTable({ color, title, categories, pagination }) {
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
                            <Link href={`${router.pathname}/add`}>
                                <a className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                                    Add
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="block w-full overflow-x-auto">
                    {/* Projects table */}
                    <table className="items-center w-full bg-transparent border-collapse">
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
                                    ID
                                </th>
                                <th
                                    className={
                                        'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                                        (color === 'light'
                                            ? 'bg-gray-50 text-gray-500 border-gray-100'
                                            : 'bg-gray-600 text-gray-200 border-gray-500')
                                    }
                                >
                                    NAME
                                </th>
                                <th
                                    className={
                                        'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                                        (color === 'light'
                                            ? 'bg-gray-50 text-gray-500 border-gray-100'
                                            : 'bg-gray-600 text-gray-200 border-gray-500')
                                    }
                                >
                                    Description
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
                        <tbody>
                            {categories
                                // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((category, key) => (
                                    <tr key={key}>
                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                            <span
                                                className={
                                                    'ml-3 font-bold ' +
                                                    +(color === 'light' ? 'text-gray-600' : 'text-white')
                                                }
                                            >
                                                {category._id}
                                            </span>
                                        </th>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            {category.name}
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            {category.description}
                                        </td>

                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                                            <TableDropdown router={router} id={category._id} />
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Pagination
                count={pagination.pageCount}
                showFirstButton
                showLastButton
                page={pagination.page}
                onChange={(event, page) => {
                    router.push('/admin/category?page=' + page);
                }}
            />
        </>
    );
}

CategoryCardTable.defaultProps = {
    color: 'light',
};

CategoryCardTable.propTypes = {
    color: PropTypes.oneOf(['light', 'dark']),
};

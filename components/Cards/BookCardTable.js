import PropTypes from 'prop-types';
import BookDropdown from 'components/Dropdowns/BookDropdown';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Pagination } from '@mui/material';

export default function BookCardTable({ color, title, books, pagination }) {
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
                                    DESCRIPTION
                                </th>
                                <th
                                    className={
                                        'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                                        (color === 'light'
                                            ? 'bg-gray-50 text-gray-500 border-gray-100'
                                            : 'bg-gray-600 text-gray-200 border-gray-500')
                                    }
                                >
                                    AUTHOR
                                </th>
                                <th
                                    className={
                                        'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                                        (color === 'light'
                                            ? 'bg-gray-50 text-gray-500 border-gray-100'
                                            : 'bg-gray-600 text-gray-200 border-gray-500')
                                    }
                                >
                                    CATEGORY
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
                                    PRICES
                                </th>
                                <th
                                    className={
                                        'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                                        (color === 'light'
                                            ? 'bg-gray-50 text-gray-500 border-gray-100'
                                            : 'bg-gray-600 text-gray-200 border-gray-500')
                                    }
                                >
                                    THUMBNAIL
                                </th>
                                <th
                                    className={
                                        'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                                        (color === 'light'
                                            ? 'bg-gray-50 text-gray-500 border-gray-100'
                                            : 'bg-gray-600 text-gray-200 border-gray-500')
                                    }
                                >
                                    CHANNEL
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
                            {books.map((book, key) => (
                                <tr key={key}>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 font-bold">
                                        {book.name}
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs">
                                        {`${book.description.substring(0, 100)}  ${
                                            book.description.length > 100 ? '...' : ''
                                        }`}
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {book.author}
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {book.categoryId.name}
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {book.isVip == 1 ? 'VIP' : 'NORMAL'}
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {book.prices}
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        <div className="flex">
                                            <img
                                                src={book.thumbnail}
                                                alt="..."
                                                className="w-20 h-20 border-2 border-gray-50 shadow"
                                            ></img>
                                        </div>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        {book.channel}
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                                        <BookDropdown router={router} id={book._id} />
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
                    router.push('/admin/books?page=' + page);
                }}
            />
        </>
    );
}

BookCardTable.defaultProps = {
    color: 'light',
};

BookCardTable.propTypes = {
    color: PropTypes.oneOf(['light', 'dark']),
};

import CategoryCardTable from 'components/Cards/CategoryCardTable';
import Admin from 'layouts/Admin';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

export default function Index() {
    const router = useRouter();
    const { jwt } = useSelector((state) => state.storeManage);
    const [categories, setCategories] = useState([]);
    const [pagination, setPagination] = useState({});
    const page = router.query.page;
    useEffect(() => {
        if (jwt == 'null') return router.push('/auth/login');
        async function getCategories() {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories?pageNum=${page}`);
            if (res.status == 200) {
                if (res.data.success == true) {
                    const data = res.data.data.categories;
                    const pagination = res.data.data.pagination;
                    setCategories(data);
                    setPagination(pagination);
                }
            }
        }
        getCategories();
    }, [jwt, page]);
    return (
        <>
            <div className="flex flex-wrap mt-4">
                <div className="w-full mb-12 px-4">
                    <CategoryCardTable title="Categories" categories={categories} pagination={pagination} />
                </div>
            </div>
        </>
    );
}

Index.layout = Admin;

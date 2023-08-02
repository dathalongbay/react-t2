import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAsync } from "../redux/features/productSlice";
import Product from "./Product";
import { useNavigate } from 'react-router-dom';
const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products);
    const status = useSelector((state) => state.product.status);
    const error = useSelector((state) => state.product.error);
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(fetchProductsAsync());
    }, [dispatch]);

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <div class="w-9/12 p-4">
                <div className="container mx-auto p-4">
                    <div className="flex justify-end mb-4">
                        <button className="bg-purple-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-purple-600" onClick={() => navigate('/add-product')}>Thêm sản phẩm</button>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-4">
                        <h2 className="text-2xl font-semibold mb-4">Danh sách sản phẩm</h2>
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="px-4 py-2">Tên sản phẩm</th>
                                    <th className="px-4 py-2">Hình ảnh</th>
                                    <th className="px-4 py-2">Chỉnh sửa</th>
                                    <th className="px-4 py-2">Xóa</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product) => (
                                    <Product key={product.id} product={product} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductList;

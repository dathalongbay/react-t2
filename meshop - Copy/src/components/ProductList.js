import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAsync } from "../redux/features/productSlice";
import ProductItem from "./ProductItem";
const ProductList = () => {
    const products = useSelector((state) => state.product.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProductsAsync());
    }, [dispatch]);


    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map(product => (
                <ProductItem key={product.id} product={product} />
            ))}
            </div>

        </>
    )
};

export default ProductList;
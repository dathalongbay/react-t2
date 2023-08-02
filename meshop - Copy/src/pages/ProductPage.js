import Product from "../components/Product";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProductAsync } from "../redux/features/productSlice";
import { useParams } from 'react-router-dom';
const ProductPage = () => {
    const product = useSelector(state => state.product?.product?.product);

    const dispatch = useDispatch();

    const { id } = useParams();

    useEffect(() => {
        dispatch(fetchSingleProductAsync(id));
    }, [dispatch, id]);

    return (<>
        <Product product={product} />
    </>)
};

export default ProductPage;
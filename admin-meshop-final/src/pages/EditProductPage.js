import requireAuth from "../hook/requireAuth";
import { useParams } from 'react-router-dom';
import ProductForm from "../components/ProductForm";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProductAsync } from "../redux/features/productSlice";

const EditProductPage = () => {
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product.product);
    const { id } = useParams();

    

    useEffect(() => {
        dispatch(fetchSingleProductAsync(id));
    }, [dispatch, id]);


    return (<>

        <ProductForm id={id} product={product} />
        
    </>)
}

export default requireAuth(EditProductPage);
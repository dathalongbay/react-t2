import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addProductAsync, updateProductAsync } from "../redux/features/productSlice";
import { useNavigate } from 'react-router-dom';
const ProductForm = ({ product, id }) => {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    let productItem = product?.product;
    setName(productItem?.title);
    setDescription(productItem?.description);
    setPrice(productItem?.price);
    setImage(productItem?.image);
  }, [product]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = { title: name, description, price: Number(price), image };
    if (id > 0) {
      newProduct.id = Number(id);
      await dispatch(updateProductAsync(newProduct));
    } else {
      await dispatch(addProductAsync(newProduct));
    }
    navigate(`/`);
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-8 mt-4" style={{ width: '100%' }}>
        <h1 className="text-3xl font-semibold mb-6 text-center">{id > 0 ? `Sửa sản phẩm (${id})` : 'Thêm sản phẩm'} </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label for="productName" className="block text-gray-700 font-semibold mb-2">Tên sản phẩm</label>
            <input type="text" id="productName" name="productName" className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500" required value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="mb-4">
            <label for="productPrice" className="block text-gray-700 font-semibold mb-2">Giá sản phẩm</label>
            <input type="number" id="productPrice" name="productPrice" className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500" required value={price} onChange={(e) => setPrice(e.target.value)} />
          </div>

          <div className="mb-4">
            <label for="productImage" className="block text-gray-700 font-semibold mb-2">Đường dẫn sản phẩm</label>
            <input type="text" id="productImage" name="productImage" className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500" required value={image} onChange={(e) => setImage(e.target.value)} />
          </div>

          <div className="mb-4">
            <label for="productDescription" className="block text-gray-700 font-semibold mb-2">Mô tả sản phẩm</label>
            <textarea id="productDescription" name="productDescription" rows="4" className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500" required value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          </div>

          <button type="submit" className="bg-purple-500 text-white font-semibold px-6 py-3 rounded-lg w-full hover:bg-purple-600">{id > 0 ? 'Cập nhật sản phẩm' : 'Thêm sản phẩm'}</button>
        </form>
      </div>
    </>
  );
};

export default ProductForm;

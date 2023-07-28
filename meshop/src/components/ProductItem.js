const ProductItem = () => {
    return (
        <>
            <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
                <img src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/_/7/_76666_7__3-3.jpg"
                    alt="Product 1" className=" mb-4 rounded-lg" />
                <h2 className="text-lg font-semibold">Tên sản phẩm 1</h2>
                <p className="text-gray-600">Giá: $100</p>
                <button className="bg-purple-600 text-white font-semibold px-4 py-2 mt-4 rounded-lg hover:bg-blue-600">Add
                    to Cart</button>
            </div>
        </>
    )
};

export default ProductItem;
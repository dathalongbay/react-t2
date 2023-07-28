import { Link } from "react-router-dom";
const CartPage = () => {
    return (
        <>
            <h1 className="text-3xl font-bold mb-4">Giỏ hàng</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
                <div className="bg-white rounded-lg shadow-md p-4">
                    <img src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/_/7/_76666_7__3-3.jpg" alt="Product 1" className="w-32 h-32 object-cover rounded-lg mb-4" />
                        <h2 className="text-lg font-semibold">Tên sản phẩm 1</h2>
                        <p className="text-gray-600">Giá: $100</p>
                        <button className="bg-red-500 text-white font-semibold px-3 py-1 rounded-lg mt-4">Remove</button>
                </div>

           
                <div className="bg-white rounded-lg shadow-md p-4">
                    <img src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/_/7/_76666_7__3-3.jpg" alt="Product 2" className="w-32 h-32 object-cover rounded-lg mb-4" />
                        <h2 className="text-lg font-semibold">Tên sản phẩm 2</h2>
                        <p className="text-gray-600">Giá: $150</p>
                        <button className="bg-red-500 text-white font-semibold px-3 py-1 rounded-lg mt-4">Remove</button>
                </div>

             
            </div>

            <div className="mt-8">
                <h2 className="text-xl font-semibold">Tổng giá trị đơn hàng:</h2>
                <p className="text-2xl font-bold">$250</p>
            </div>

            <div className="mt-8 text-center">
                <Link to='/payment' className="bg-purple-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-purple-600">Thanh toán</Link>
            </div>
        </>
    )
};

export default CartPage;
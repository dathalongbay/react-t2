import { Link } from "react-router-dom";
const PaymentPage = () => {
    return (
        <>
            <h1 className="text-3xl font-bold mb-4">Thanh toán COD</h1>

            <div className="bg-white rounded-lg shadow-md p-4 mb-4">
                <h2 className="text-xl font-semibold mb-2">Danh sách sản phẩm thanh toán</h2>
                <ul className="space-y-2">
                    <li className="flex items-center">
                        <img src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/_/7/_76666_7__3-3.jpg"
                            alt="Product 1" className="w-16 h-16 object-cover rounded-lg mr-4" />
                            <div>
                                <h3 className="font-semibold">Sản phẩm 1</h3>
                                <p className="text-gray-600">Giá: $100</p>
                            </div>
                    </li>
                    <li className="flex items-center">
                        <img src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/_/7/_76666_7__3-3.jpg"
                            alt="Product 2" className="w-16 h-16 object-cover rounded-lg mr-4" />
                            <div>
                                <h3 className="font-semibold">Sản phẩm 2</h3>
                                <p className="text-gray-600">Giá: $150</p>
                            </div>
                    </li>
                </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4">
                <h2 className="text-xl font-semibold mb-4">Thông tin khách hàng</h2>
                <form>
                    <div className="mb-4">
                        <label for="name" className="block text-gray-700 font-semibold mb-2">Tên khách hàng</label>
                        <input type="text" id="name" name="name"
                            className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500"
                            required />
                    </div>
                    <div className="mb-4">
                        <label for="address" className="block text-gray-700 font-semibold mb-2">Địa chỉ</label>
                        <input type="text" id="address" name="address"
                            className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500"
                            required />
                    </div>
                    <div className="mb-4">
                        <label for="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                        <input type="email" id="email" name="email"
                            className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500"
                            required />
                    </div>
                    <div className="mb-4">
                        <label for="phone" className="block text-gray-700 font-semibold mb-2">Số điện thoại</label>
                        <input type="tel" id="phone" name="phone"
                            className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500"
                            required />
                    </div>

                    <Link to='/order' className="bg-purple-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-purple-600">Hoàn thất thanh toán</Link>
                   
                </form>
            </div>
        </>
    )
};

export default PaymentPage;
const OrderPage = () => {
    return (
        <>
            <div className="container mx-auto p-4">
                <div className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto">
                    <div className="mb-6">
                    <h2 className="text-3xl font-semibold mb-4">Đặt hàng thành công mã đơn hàng X3526272</h2>
                    </div>

                

                    <div className="mb-6">
                        <h2 className="text-4xl font-semibold mb-4">Thông tin khách hàng</h2>
                        <div className="grid grid-cols-2 gap-4">

                            <div>
                                <label for="customerName" className="block text-gray-700 font-semibold mb-2">Tên khách hàng</label>
                                <p id="customerName" className="border border-gray-400 rounded-lg px-4 py-2 bg-gray-100">John Doe</p>
                            </div>

                            <div>
                                <label for="customerAddress" className="block text-gray-700 font-semibold mb-2">Địa chỉ</label>
                                <p id="customerAddress" className="border border-gray-400 rounded-lg px-4 py-2 bg-gray-100">123 Main St, City</p>
                            </div>
                            <div>
                                <label for="customerEmail" className="block text-gray-700 font-semibold mb-2">Email</label>
                                <p id="customerEmail" className="border border-gray-400 rounded-lg px-4 py-2 bg-gray-100">john@example.com</p>
                            </div>

                            <div>
                                <label for="customerPhone" className="block text-gray-700 font-semibold mb-2">Số điện thoại</label>
                                <p id="customerPhone" className="border border-gray-400 rounded-lg px-4 py-2 bg-gray-100">+1 123-456-7890</p>
                            </div>
                        </div>
                    </div>

            
                    <div>
                        <h2 className="text-4xl font-semibold mb-4">Danh sách sản phẩm</h2>
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="px-4 py-2">Tên sản phẩm</th>
                                    <th className="px-4 py-2">Giá</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td className="px-4 py-2">Sản phẩm A</td>
                                    <td className="px-4 py-2">$50</td>
                                </tr>

                                <tr>
                                    <td className="px-4 py-2">Sản phẩm B</td>
                                    <td className="px-4 py-2">$30</td>
                                </tr>

                            </tbody>
                        </table>


                        <div className="mt-4">
                            <p className="text-xl font-semibold">Tổng tiền cần thanh toán: $80</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default OrderPage;
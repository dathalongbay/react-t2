import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from "react";
import { fetchSingleOrderAsync } from "../redux/features/orderSlice";
const OrderPage = () => {
    const { id } = useParams();

    const order = useSelector(state => state.order?.order?.order);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSingleOrderAsync(id));
    }, [dispatch, id]);

    const orderDetail = order ? JSON.parse(order?.order_detail) : [];

    console.log(orderDetail)

    return (
        <>
            <div className="container mx-auto p-4">
                <pre>
                    {JSON.stringify(order, null, 2)}
                </pre>

                <pre>
                    {order?.order_detail}
                </pre>
                <div className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto">
                    <div className="mb-6">
                        <h2 className="text-3xl font-semibold mb-4">Đặt hàng thành công mã đơn hàng {id}</h2>
                    </div>
                    <div className="mb-6">
                        <h2 className="text-4xl font-semibold mb-4">Thông tin khách hàng</h2>
                        <div className="grid grid-cols-2 gap-4">

                            <div>
                                <label for="customerName" className="block text-gray-700 font-semibold mb-2">Tên khách hàng</label>
                                <p id="customerName" className="border border-gray-400 rounded-lg px-4 py-2 bg-gray-100">{order?.customer_name || ''}</p>
                            </div>

                            <div>
                                <label for="customerAddress" className="block text-gray-700 font-semibold mb-2">Địa chỉ</label>
                                <p id="customerAddress" className="border border-gray-400 rounded-lg px-4 py-2 bg-gray-100">{order?.customer_address || ''}</p>
                            </div>
                            <div>
                                <label for="customerEmail" className="block text-gray-700 font-semibold mb-2">Email</label>
                                <p id="customerEmail" className="border border-gray-400 rounded-lg px-4 py-2 bg-gray-100">{order?.customer_email || ''}</p>
                            </div>

                            <div>
                                <label for="customerPhone" className="block text-gray-700 font-semibold mb-2">Số điện thoại</label>
                                <p id="customerPhone" className="border border-gray-400 rounded-lg px-4 py-2 bg-gray-100">{order?.customer_phone || ''}</p>
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
                                    <th className="px-4 py-2">Số lượng</th>
                                </tr>
                            </thead>
                            <tbody>

                                {orderDetail.map(item => (
                                    <tr>
                                        <td className="px-4 py-2">{item.title}</td>
                                        <td className="px-4 py-2">${item.price}</td>
                                        <td className="px-4 py-2">{item.quantity}</td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>


                        <div className="mt-4">
                            <p className="text-xl font-semibold">Tổng tiền cần thanh toán: ${order?.total || 0}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default OrderPage;
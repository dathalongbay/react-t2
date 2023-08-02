import { Link } from "react-router-dom";
import CartPayment from "../components/CartPayment";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addOrderAsync, fetchSingleOrderAsync } from '../redux/features/orderSlice';
import { addToCart, removeFromCart, clearCart } from '../redux/features/cartSlice';
const PaymentPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartItems = useSelector(state => state.cart.items);

    const [customerName, setCustomerName] = useState('');
    const [customerAddress, setCustomerAddress] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [customerPhone, setCustomerPhone] = useState('');
    const handlePayment = async (e) => {
        e.preventDefault();
        const order = { customer_name: customerName, customer_email : customerEmail, customer_address: customerAddress, customer_phone : customerPhone, productData : cartItems };
        if (customerName && customerAddress && customerEmail && customerPhone) {
            let orderId = await dispatch(addOrderAsync(order));
            await dispatch(clearCart());
            navigate(`/order/${orderId.payload}`);
        } else {
            alert("Thông tin đặt hàng chưa hợp lệ");
        }
    }

    if (cartItems.length < 1) {
        return (<></>);
    } 

    return (
        <>
            <h1 className="text-3xl font-bold mb-4">Thanh toán COD</h1>

            <CartPayment />

            <div className="bg-white rounded-lg shadow-md p-4">
                <h2 className="text-xl font-semibold mb-4">Thông tin khách hàng</h2>
                <form onSubmit={handlePayment}>
                    <div className="mb-4">
                        <label for="name" className="block text-gray-700 font-semibold mb-2">Tên khách hàng</label>
                        <input type="text" id="name" name="name"
                            className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500"
                            required value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
                    </div>
                    <div className="mb-4">
                        <label for="address" className="block text-gray-700 font-semibold mb-2">Địa chỉ</label>
                        <input type="text" id="address" name="address"
                            className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500"
                            required value={customerAddress} onChange={(e) => setCustomerAddress(e.target.value)} />
                    </div>
                    <div className="mb-4">
                        <label for="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                        <input type="email" id="email" name="email"
                            className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500"
                            required value={customerEmail} onChange={(e) => setCustomerEmail(e.target.value)} />
                    </div>
                    <div className="mb-4">
                        <label for="phone" className="block text-gray-700 font-semibold mb-2">Số điện thoại</label>
                        <input type="tel" id="phone" name="phone"
                            className="w-full border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500"
                            required value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)} />
                    </div>

                    <button className="bg-purple-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-purple-600">Hoàn thất thanh toán</button>
                   
                </form>
            </div>
        </>
    )
};

export default PaymentPage;
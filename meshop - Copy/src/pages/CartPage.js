import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, clearCart } from '../redux/features/cartSlice';
const CartPage = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const handleRemoveFromCart = (itemId) => {
        dispatch(removeFromCart(itemId));
    };
    const calculateTotal = (cartItems) => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };
    const calculateTotalQuantity = (cartItems) => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    if (calculateTotalQuantity(cartItems) < 1) {
        return (
            <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    Giỏ hàng đang trống
                </div>
            </>
        )
    }
    return (
        <>
            <h1 className="text-3xl font-bold mb-4">Giỏ hàng ({calculateTotalQuantity(cartItems)} sản phẩm)</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {cartItems.map(item => (
                    <div key={item.id} className="bg-white rounded-lg shadow-md p-4">
                        <img src={item.image} alt="Product 1" className="w-32 h-32 object-cover rounded-lg mb-4" />
                        <h2 className="text-lg font-semibold">{item.title}</h2>
                        <h2 className="text-lg font-semibold">Số lượng : {item.quantity}</h2>
                        <p className="text-gray-600">Giá: ${item.price}</p>
                        <button className="bg-red-500 text-white font-semibold px-3 py-1 rounded-lg mt-4" onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                    </div>
                ))}
            </div>


            <div className="mt-8">
                <h2 className="text-xl font-semibold">Tổng giá trị đơn hàng:</h2>
                <p className="text-2xl font-bold">${calculateTotal(cartItems)}</p>
            </div>

            {calculateTotalQuantity(cartItems) > 0 && <div className="mt-8 text-center">
                <Link to='/payment' className="bg-purple-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-purple-600">Thanh toán</Link>
            </div>}
        </>
    )
};

export default CartPage;
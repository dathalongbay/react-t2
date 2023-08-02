import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, clearCart } from '../redux/features/cartSlice';
const CartPayment = () => {
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
            <div className="bg-white rounded-lg shadow-md p-4 mb-4">
                <h2 className="text-xl font-semibold mb-2">Danh sách sản phẩm thanh toán ({calculateTotal(cartItems)} $)</h2>
                <ul className="space-y-2">
                    {cartItems.map(item => (
                        <li key={item.id} className="flex items-center">
                            <img src={item.image}
                                alt="Product 2" className="w-16 h-16 object-cover rounded-lg mr-4" />
                            <div>
                                <h3 className="font-semibold">{item.title}</h3>
                                <h3 className="font-semibold">Số lượng : {item.quantity}</h3>
                                <p className="text-gray-600">Giá: ${item.price}</p>
                            </div>
                        </li>           
                    ))}
                </ul>
            </div>
        </>
    )
};

export default CartPayment;
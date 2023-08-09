import { addToCart, removeFromCart, clearCart } from '../redux/features/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const ProductItem = ({key, product}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddToCart = (product) => {
        let newProduct = {...product, quantity: 1}
        dispatch(addToCart(newProduct));
        navigate('/cart')
    };

    return (
        <>
            <div key={key} className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
                <img src={product?.image}
                    alt={product?.title} className=" mb-4 rounded-lg" />
                <h2 className="text-lg font-semibold" onClick={() => navigate(`/product/${product?.id}`)}>{product?.title}</h2>
                <p className="text-gray-600">Giá: ${product?.price}</p>
                <button className="bg-purple-600 text-white font-semibold px-4 py-2 mt-4 rounded-lg hover:bg-blue-600" onClick={() => handleAddToCart(product)}>Add
                    to Cart</button>
            </div>
        </>
    )
};

export default ProductItem;
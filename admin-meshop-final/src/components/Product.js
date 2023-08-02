import { deleteProductAsync } from "../redux/features/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
const Product = ({ product }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleEdit = (id) => {
        navigate(`/edit-product/${id}`);
    }

    const handleDelete = (id) => {
        dispatch(deleteProductAsync(id));
    }

    return (
        <>
            <tr key={product.id}>
                <td className="px-4 py-2">{product.title} <span style={{color: 'red'}}>${product.price}</span></td>
                <td className="px-4 py-2">{product.image && <img src={product.image} alt="Product A" className="w-16 h-16 object-cover rounded-lg" />}</td>
                <td className="px-4 py-2"><button className="bg-blue-500 text-white font-semibold px-3 py-1 rounded-lg hover:bg-blue-600" onClick={ () => handleEdit(product.id) }>Edit</button></td>
                <td className="px-4 py-2"><button className="bg-red-500 text-white font-semibold px-3 py-1 rounded-lg hover:bg-red-600" onClick={() => handleDelete(product.id) }>Delete</button></td>
            </tr>
        </>
    )
}

export default Product;
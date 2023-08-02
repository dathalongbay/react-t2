import { useNavigate } from 'react-router-dom';
import requireAuth from "../hook/requireAuth";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/features/authSlice';
const Header = () => {
    let user = localStorage.getItem('jwtUser');
    user = JSON.parse(user);

    /* const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const user = useSelector((state) => state.auth.user); */
    console.log(user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('jwtUser');
        localStorage.removeItem('userData');
        // Nếu bạn sử dụng Redux, hãy xóa thông tin người dùng khỏi Redux store ở đây
        // dispatch({ type: 'LOGOUT' });
        dispatch(logout());
        navigate('/login');
    };

    return (
        <header className="bg-white shadow-md py-2" style={{ minHeight: '70px' }}>

            <div className="flex mb-4">
                {user && <h1 className="text-3xl font-semibold ml-2" style={{ marginRight: '800px' }}>Xin chào <span className='text-red-500'>{user.name}</span></h1>}
                <button className="bg-orange-400 text-white font-semibold mx-2 px-4 py-2 rounded-lg" onClick={handleLogout}>Đăng xuất</button>
            </div>

        </header>
    )
}

export default requireAuth(Header);
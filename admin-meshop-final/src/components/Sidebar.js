import { Link } from "react-router-dom";

const Sidebar = () => {

    return (
        <>
            <div class="w-3/12 bg-yellow-800 text-white p-4">
                <h2 class="text-xl font-semibold mb-4">Sidebar</h2>
                <ul>
                    <li>
                        <Link to='/'>Dashboard</Link>
                    </li>
                    <li>
                        <Link to='/register'>Thêm mới admin</Link>
                    </li>
                    <li>
                        <Link to='/'>Danh sách admin</Link>
                    </li>
                    <li>
                        <Link to='/'>Sản phẩm</Link>
                    </li>
                    <li>
                        <Link to='/'>Đơn hàng</Link>
                    </li>
                </ul>
            </div>

        </>)
}

export default Sidebar;
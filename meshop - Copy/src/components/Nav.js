import { Link } from "react-router-dom";
const Nav = () => {
    return (
        <>
            <nav className="bg-purple-500 p4">
                <ul className="flex">
                    <li className="mr-6 ml-4 py-2">
                        <Link to="/" className="text-white">Trang chủ</Link>
                    </li>
                    <li className="mr-6 py-2">
                        <Link to="/store" className="text-white">Cửa hàng</Link>
                    </li>
                    <li className="mr-6 py-2">
                        <Link to="/products" className="text-white">Sản phẩm</Link>
                    </li>
                    <li className="mr-6 py-2">
                        <Link to="/blog" className="text-white">Tin tức khuyến mãi</Link>
                    </li>
                    <li className="mr-6 py-2">
                        <Link to="/contact" className="text-white">Liên hệ</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
};

export default Nav;
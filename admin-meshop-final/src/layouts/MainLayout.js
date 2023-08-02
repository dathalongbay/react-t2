import { Outlet } from 'react-router-dom';
import Header from "../components/Header";
import Footer from '../components/Footer';
import Sidebar from "../components/Sidebar";
import requireAuth from "../hook/requireAuth";
const MainLayout = () => {

    return (
        <>
            <div className="bg-gray-100">
                <Header />
                <div class="flex">
                    <Sidebar />
                    <Outlet />
                </div>
                <Footer />
            </div>
        </>
    )
}
export default requireAuth(MainLayout);
// xử lý vấn đề CRUD sản phẩm tiếp theo
// cuối cùng tôi ưu đoạn code authen vào trong redux 

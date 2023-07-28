import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
const Layout = () => {
    return (
        <>
            <div className="bg-gray-100">
                <Header />
                <Nav />

                <div className="container mx-auto p-4" style={{minHeight: '400px'}}>
                    <Outlet />
                </div>

                <Footer />
            </div>
        </>
    )
};

export default Layout;
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import Product from "./pages/Product"
import { BrowserRouter, Routes, Route } from "react-router-dom";


function DemoRouter() {

    return (<>
        <BrowserRouter>
            <Routes>
                {/* khai báo layout của ứng dụng và các router được dùng trong ứng dụng này. tương ứng với path nào thì sẽ trả về component trong prop có tên là element=? */}
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="blogs" element={<Blogs />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="product" element={<Product />} />
                    <Route path="*" element={<NoPage />} />
                </Route>

            </Routes>
        </BrowserRouter>
    </>)
}

export default DemoRouter;
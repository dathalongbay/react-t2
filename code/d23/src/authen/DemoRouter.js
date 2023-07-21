import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import Admin from "./pages/Admin"
import { BrowserRouter, Routes, Route } from "react-router-dom";


function DemoRouter() {

    return (<>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="blogs" element={<Blogs />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="admin" element={<Admin />} />
                    <Route path="*" element={<NoPage />} />
                </Route>

            </Routes>
        </BrowserRouter>
    </>)
}

export default DemoRouter;
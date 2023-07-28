import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Homepage from "./pages/Homepage";
import StorePage from "./pages/StorePage";
import ProductsPage from "./pages/ProductsPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import PaymentPage from "./pages/PaymentPage";
import OrderPage from "./pages/OrderPage";
import NoPage from "./pages/NoPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="store" element={<StorePage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="payment" element={<PaymentPage />} />
            <Route path="order" element={<OrderPage />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

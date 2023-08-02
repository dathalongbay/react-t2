import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AddProductPage from "./pages/AddProductPage";
import EditProductPage from "./pages/EditProductPage";
import NoPage from "./pages/NoPage";

import LoginLayout from "./layouts/LoginLayout";
import MainLayout from "./layouts/MainLayout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
          </Route>
          <Route path="/add-product" element={<MainLayout />}>
            <Route index element={<AddProductPage />} />
          </Route>
          <Route path="/edit-product/:id" element={<MainLayout />}>
            <Route index element={<EditProductPage />} />
          </Route>
          <Route path="/login" element={<LoginLayout />}>
            <Route index element={<LoginPage />} />
          </Route>
          <Route path="/register" element={<LoginLayout />}>
            <Route index element={<RegisterPage />} />
          </Route>
          <Route path="*" element={<LoginLayout />}>
            <Route index element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

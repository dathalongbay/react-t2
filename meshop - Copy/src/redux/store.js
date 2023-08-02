import { configureStore } from "@reduxjs/toolkit";
import CartReducer from './features/cartSlice';
import ProductReducer from "./features/productSlice";
import OrderReducer from "./features/orderSlice";

export default configureStore({
  reducer: {
    cart: CartReducer,
    product: ProductReducer,
    order: OrderReducer,
  },
});
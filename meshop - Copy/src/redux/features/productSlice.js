import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

const initialState = {
  products: [],
  product: null,
  status: "idle",
  error: null,
};

export const fetchProductsAsync = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await api.fetchProducts();
    return response;
  }
);

export const fetchSingleProductAsync = createAsyncThunk(
  "products/fetchSingleProduct",
  async (id) => {
    const response = await api.fetchSingleProduct(id);
    return response;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      })
      .addCase(fetchProductsAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.error.message;
      })
      .addCase(fetchSingleProductAsync.fulfilled, (state, action) => {
        state.product = action.payload;
      })
  },
});

export default productsSlice.reducer;

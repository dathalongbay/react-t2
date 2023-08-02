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

export const addProductAsync = createAsyncThunk(
  "products/addProduct",
  async (product) => {
    const response = await api.addProduct(product);
    return response;
  }
);

export const updateProductAsync = createAsyncThunk(
  "products/updateProduct",
  async (product) => {
    const response = await api.updateProduct(product);
    return response;
  }
);

export const deleteProductAsync = createAsyncThunk(
  "products/deleteProduct",
  async (productId) => {
    const response = await api.deleteProduct(productId);
    return productId;
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
      .addCase(addProductAsync.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(fetchSingleProductAsync.fulfilled, (state, action) => {
        state.product = action.payload;
      })
      .addCase(updateProductAsync.fulfilled, (state, action) => {
        const updatedProduct = action.payload;
        const index = state.products.findIndex((p) => p.id === updatedProduct.id);
        if (index !== -1) {
          state.products[index] = updatedProduct;
        }
      })
      .addCase(deleteProductAsync.fulfilled, (state, action) => {
        const productId = action.payload;
        state.products = state.products.filter((p) => p.id !== productId);
      });
  },
});

export default productsSlice.reducer;

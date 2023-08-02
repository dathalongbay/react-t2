import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

const initialState = {
  orders: [],
  order: null,
  status: "idle",
  error: null,
};

export const fetchSingleOrderAsync = createAsyncThunk(
  "orders/fetchSingleOrder",
  async (id) => {
    const response = await api.fetchSingleOrder(id);
    return response;
  }
);

export const addOrderAsync = createAsyncThunk(
  "orders/addOrder",
  async (order) => {
    const response = await api.addOrder(order);
    console.log(response?.message?.id);
    return Number(response?.message?.id);
  }
);


const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addOrderAsync.fulfilled, (state, action) => {
        state.orders.push(action.payload);
      })
      .addCase(fetchSingleOrderAsync.fulfilled, (state, action) => {
        state.order = action.payload;
      })
  },
});

export default ordersSlice.reducer;

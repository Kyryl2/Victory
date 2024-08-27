import { createSlice } from "@reduxjs/toolkit";
import {
  addToCartThunk,
  checkoutThunk,
  fetchCartThunk,
  removeFromCartThunk,
} from "./operations";

const initialState = {
  items: [],
  total: 0,
  status: "idle",
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState, // Використовуємо раніше визначену змінну
  reducers: {
    clearCart(state) {
      state.items = [];
      state.total = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartThunk.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchCartThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload.products;
        state.total = action.payload.total;
      })
      .addCase(fetchCartThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(addToCartThunk.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(addToCartThunk.fulfilled, (state, action) => {
        state.status = "succeeded";

        // Знайти, чи товар вже є у кошику
        const existingItem = state.items.find(
          (item) => item.name === action.payload.name
        );

        if (existingItem) {
          // Якщо товар є, додати кількість до вже існуючої
          existingItem.quantity += action.payload.quantity;
        } else {
          // Якщо товару немає, додати його до списку
          state.items.push(action.payload);
        }

        // Оновити загальну суму
        state.total = state.items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      })
      .addCase(addToCartThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(removeFromCartThunk.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(removeFromCartThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload.products;
        state.total = action.payload.total;
      })
      .addCase(removeFromCartThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(checkoutThunk.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(checkoutThunk.fulfilled, (state) => {
        state.status = "succeeded";
        state.items = [];
        state.total = 0;
      })
      .addCase(checkoutThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const cartReducer = cartSlice.reducer;

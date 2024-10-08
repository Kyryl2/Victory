import { createAsyncThunk } from "@reduxjs/toolkit";
import { backend } from "../../config/backend";

// Санка для додавання товару до кошика
export const addToCartThunk = createAsyncThunk(
  "cart/addToCart",
  async ({ name, description, price, img, quantity }, thunkAPI) => {
    try {
      const response = await backend.post("orders/cart", {
        name,
        description,
        price,
        img,
        quantity,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.error || error.message
      );
    }
  }
);

// Санка для отримання товарів з кошика
export const fetchCartThunk = createAsyncThunk(
  "cart/fetchCart",
  async (_, thunkAPI) => {
    try {
      const response = await backend.get("orders/cart");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.error || error.message
      );
    }
  }
);

// Санка для оформлення замовлення
export const checkoutThunk = createAsyncThunk(
  "cart/checkout",
  async (_, thunkAPI) => {
    try {
      const response = await backend.post("orders/checkout");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.error || error.message
      );
    }
  }
);

// Санка для видалення товару з кошика
export const removeFromCartThunk = createAsyncThunk(
  "cart/removeFromCart",
  async (productName, thunkAPI) => {
    try {
      const response = await backend.delete(`orders/cart/${productName}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.error || error.message
      );
    }
  }
);

export const updateCartItemThunk = createAsyncThunk(
  "cart/updateItem",
  async ({ name, quantity }, { rejectWithValue }) => {
    try {
      // Sending PATCH request to the modified endpoint
      const response = await backend.patch("orders/cart", {
        name, // Sending `name` in the request body
        quantity, // Sending `quantity` in the request body
      });
      return response.data; // Return the updated order data
    } catch (error) {
      // Handle errors and reject with error response
      return rejectWithValue(error.response.data);
    }
  }
);

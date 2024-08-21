import { createAsyncThunk } from "@reduxjs/toolkit";
import { backend } from "../../config/backend";

export const getUkrFood = createAsyncThunk(
  "ukrFood/getUkrFood",
  async (_, thunkAPI) => {
    try {
      const { data } = await backend.get("products/");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getPizzas = createAsyncThunk(
  "pizzas/getPizzas",
  async (_, thunkAPI) => {
    try {
      const { data } = await backend.get("pizza/");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getSushi = createAsyncThunk(
  "sushi/getSushi",
  async (_, thunkAPI) => {
    try {
      const { data } = await backend.get("sushi/");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

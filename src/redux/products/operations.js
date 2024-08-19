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

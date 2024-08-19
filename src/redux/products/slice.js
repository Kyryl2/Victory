import { createSlice } from "@reduxjs/toolkit";
import { getUkrFood } from "./operations";

const ukrFoodSlice = createSlice({
  name: "ukrFood",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUkrFood.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getUkrFood.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(getUkrFood.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const ukrFoods = ukrFoodSlice.reducer;

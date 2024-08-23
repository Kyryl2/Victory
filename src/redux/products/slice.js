import { createSlice } from "@reduxjs/toolkit";
import { getPizzas, getSushi, getUkrFood } from "./operations";

const initialState = {
  ukrFood: [],
  pizzas: [],
  sushi: [],
  status: "idle",
  error: null,
};

const ukrFoodSlice = createSlice({
  name: "ukrFood",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getUkrFood.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getPizzas.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getSushi.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getUkrFood.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.ukrFood = action.payload;
      })
      .addCase(getPizzas.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.pizzas = action.payload;
      })
      .addCase(getSushi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.sushi = action.payload;
      })
      .addCase(getUkrFood.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(getPizzas.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(getSushi.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const productReducer = ukrFoodSlice.reducer;

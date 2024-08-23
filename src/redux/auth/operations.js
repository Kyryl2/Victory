import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  backend,
  clearAuthHeader,
  updateAuthHeader,
} from "../../config/backend";

export const userRegisterThunk = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await backend.post("auth/register", credentials);
      updateAuthHeader(data.token);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const userLoginThunk = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await backend.post("auth/login", credentials);
      updateAuthHeader(data.token);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const userLogoutThunk = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      await backend.post("auth/logout");
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const userRefreshThunk = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    try {
      const { auth } = thunkAPI.getState();

      if (!auth.token) {
        return thunkAPI.rejectWithValue("Unable to fetch user");
      }

      updateAuthHeader(auth.token);

      const { data } = await backend.post("/refresh", { token: auth.token });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.error || error.message
      );
    }
  }
);

import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../config/axios.js";
export const userFetchApi = createAsyncThunk(
  "user/userFetchApi",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("user");
      // console.log(res?.data);
      return res?.data;
    } catch (err) {
      rejectWithValue("Something went wrong", err);
    }
  },
);
export const userCreate = createAsyncThunk(
  "user/userCreate",
  async (details, { rejectWithValue, dispatch }) => {
    try {
      const res = await api.post("user", details);
      dispatch(userFetchApi());
      console.log(res?.data);
      return res?.data;
    } catch (err) {
      rejectWithValue("Something went wrong", err);
    }
  },
);

export const userUpdate = createAsyncThunk(
  "user/update",
  async ({id, details}, {rejectWithValue, dispatch}) => {
    try {
      const res = await api.put(`user/${id}`, details);
      dispatch(userFetchApi());
      console.log(res?.data);
      return res?.data;
    } catch (err) {
      rejectWithValue("Something went wrong", err);
    }
  },
);

export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (id, { rejectWithValue, dispatch }) => {
    console.log(id);
    try {
      const res = await api.delete(`user/${id}`);
      dispatch(userFetchApi());
      console.log(res?.data);
      return res?.data;
    } catch (err) {
      rejectWithValue("Something went wrong", err);
    }
  },
);

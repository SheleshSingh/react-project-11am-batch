import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../config/axios.js";

export const userFetchApi = createAsyncThunk(
  "user/userFetchApi",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("");
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
      const res = await api.post("", details);
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
      const res = await api.delete(`/${id}`);
      dispatch(userFetchApi());
      console.log(res?.data);
      return res?.data;
    } catch (err) {
      rejectWithValue("Something went wrong", err);
    }
  },
);
export const editUser = createAsyncThunk(
  "user/editUser",
  async ({ id, details }, { rejectWithValue, dispatch }) => {
    // console.log(id);
    try {
      const res = await api.put(`/${id}`, details);
      dispatch(userFetchApi());
      console.log(res?.data);
      return res?.data;
    } catch (err) {
      rejectWithValue("Something went wrong", err);
    }
  },
);

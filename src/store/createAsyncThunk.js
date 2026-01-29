import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../config/axios.js";
export const userFetchApi = createAsyncThunk("user/userFetchApi", async () => {
  const res = await api.get("user");
  console.log(res?.data);
  return res?.data;
});

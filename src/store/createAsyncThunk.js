import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../config/axios.js";
export const userFetchApi = createAsyncThunk("user/userFetchApi", async () => {
  const res = await api.get();
  const data = await res.json();
  console.log(data);
});

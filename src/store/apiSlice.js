import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usersData: [],
  loading: false,
  error: null,
};
const apiSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const {} = apiSlice.actions;
export default apiSlice.reducer;

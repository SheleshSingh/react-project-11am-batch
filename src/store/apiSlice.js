import { createSlice } from "@reduxjs/toolkit";
import { userCreate, userFetchApi, userUpdate } from "./createAsyncThunk";

const initialState = {
  usersData: [],
  loading: false,
  error: null,
};
const apiSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userFetchApi.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(userFetchApi.fulfilled, (state, action) => {
      state.loading = false;
      state.usersData = action.payload;
    });
    builder.addCase(userFetchApi.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    // user create method post
    builder.addCase(userCreate.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(userCreate.fulfilled, (state) => {
      state.loading = false;
      
    });
    builder.addCase(userCreate.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
       // user update method put
    builder.addCase(userUpdate.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(userUpdate.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(userUpdate.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const {} = apiSlice.actions;
export default apiSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import { getUserDetails, updateUser } from "./dashboardActions";

const userToken = localStorage.getItem("userToken")
  ? localStorage.getItem("userToken")
  : null;

const initialState = {
  loading: false,
  userInfo: null,
  userToken,
  error: null,
  success: false,
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("userToken");
      state.loading = false;
      state.userInfo = null;
      state.userToken = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
      })
      .addCase(getUserDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.userInfo = jwtDecode(action.payload.token).others;
        console.log(state.userInfo);
        state.userToken = action.payload.token;
      })
      .addCase(updateUser, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = dashboardSlice.actions;

export default dashboardSlice.reducer;

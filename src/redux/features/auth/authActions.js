import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import jwt from "jwt-decode";
import API from "../../../apis/schoolAPI";

export const registerUser = createAsyncThunk(
  "user/register",
  async ({ email,password, confirmPassword }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
       
      const response = await API.post(
        `/register`,
        {
          email,
          password,
          confirmPassword,
        },
        config
      );

      return response.data;
    } catch (error) {
      if (error.response && error.response.data.message)
        return rejectWithValue(error.response.data.message);
      else return rejectWithValue(error.message);
    }
  }
);

export const userLogin = createAsyncThunk(
  "user/login",
  async ({ loginDetail, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      return await API.post("/login", { loginDetail, password }, config).then(
        (response) => {
          if (response.data.token) {
            localStorage.setItem(
              "userToken",
              JSON.stringify(response.data.token)
            );
          }

          return response.data;
        }
      );
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
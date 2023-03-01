import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import jwt from "jwt-decode";
import API from "../../../apis/schoolAPI";

export const registerUser = createAsyncThunk(
  "user/register",
  async ({ email,password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
       
      const response = await API.post(
        `/auth/register`,
        {
          email,
          password,
          role: "school"
          
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
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      return await API.post("/auth/login", { email, password , role: "school"}, ).then(
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
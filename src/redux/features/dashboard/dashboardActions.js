import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import jwt from "jwt-decode";
import API from "../../../apis/schoolAPI";

export const getUserDetails = createAsyncThunk(
  "user/getUserDetails",
  async (arg, { getState, rejectWithValue }) => {
    try {
      const { auth } = getState();
      const config = {
        headers: {
          Authorization: `Bearer ${auth.userToken}`,
        },
      };

      const studentID = jwt(auth.userToken).id;

      const { data } = await API.get(`/dashboard/${studentID}/profile`, config);

      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const updateUser = createAsyncThunk(
  "/dashboard/updateUser",
  async (data, { getState }) => {
    const { auth } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${auth.userToken}`,
      },
    };

    //  const studentID = jwt(auth.userToken).id;

    const {
      userID,
      first_name,
      last_name,
      middle_name,
      dob,
      gender,
      phone,
      marital_status,
      country_of_origin,
      country_of_residence,
      state,
      city,
      pin_code,
      address,
      passport_status,
      father,
      highest_qualification,
      profile_completion,
      mbbs,
    } = data;
    try {
      const { data } = await API.put(
        `/dashboard/${userID}`,
        {
          first_name,
          last_name,
          middle_name,
          dob,
          gender,
          phone,
          marital_status,
          country_of_origin,
          country_of_residence,
          state,
          city,
          pin_code,
          address,
          passport_status,
          father,
          highest_qualification,
          profile_completion,
          mbbs,
        },
        config
      );

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

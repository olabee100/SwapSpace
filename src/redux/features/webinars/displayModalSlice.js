import {createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: false
}

const displayModalSlice = createSlice({
  name: "displayModal",
  initialState,
  reducers: {
    setDisplayModal(state, action) {
      state.value = action.payload
    },
  }
})

export const { setDisplayModal } = displayModalSlice.actions
export default displayModalSlice.reducer
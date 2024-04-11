import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../types/types";

const initialState: InitialState = {
  carSelected: null,
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    selectCar: (state, action) => {
      state.carSelected = action.payload;
    },
  },
});


export const carReducer = carSlice.reducer;
export const carActions = carSlice.actions;

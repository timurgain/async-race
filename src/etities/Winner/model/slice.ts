import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { InitialState, Winner } from "../types/types";

const initialState: InitialState = {
  winners: null,
  currentWinner: null,
  currentRaceStart: null,
  currentRaceFirstFinish: null,
};

const winnerSlice = createSlice({
  name: "winner",
  initialState,
  reducers: {
    setWinners: (state, action: PayloadAction<Winner[]>) => {
      state.winners = action.payload;
    },
    setCurrentWinner: (state, action: PayloadAction<Winner>) => {
      state.currentWinner = action.payload;
    },
    setCurrentRaceStart: (state, action: PayloadAction<number>) => {
      state.currentRaceStart = action.payload;
    },
    setCurrentRaceFirstFinish: (state, action: PayloadAction<number>) => {
      state.currentRaceFirstFinish = action.payload;
    },
  },
});

export const winnerActions = winnerSlice.actions;
export const winnerReducer = winnerSlice.reducer;

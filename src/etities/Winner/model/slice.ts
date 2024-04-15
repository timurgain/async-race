import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { InitialState, WinnerResponse, WinnerRequest } from '../types/types';

const initialState: InitialState = {
  winners: null,
  winnerIDs: null,
  currentWinner: null,
  currentRaceStartTime: null,
  currentRaceFirstFinishTime: null,
};

const winnerSlice = createSlice({
  name: 'winner',
  initialState,
  reducers: {

    setWinners: (state, action: PayloadAction<WinnerResponse[]>) => {
      action.payload.forEach((winner) => {
        if (!state.winners) state.winners = {};
        if (!state.winnerIDs) state.winnerIDs = [];
        state.winners[winner.id] = winner;
        state.winnerIDs.push(winner.id);
      });
    },

    setCurrentRaceStartTime: (state, action: PayloadAction<number>) => {
      state.currentRaceStartTime = action.payload;
    },

    mutateCurrentWinner: (
      state,
      action: PayloadAction<(WinnerRequest & { carFinishTime: number }) | null>
    ) => {
      //reset winner at any time
      if (action.payload === null) {
        state.currentWinner = null;
        return;
      }

      // if the winner is already defined, do nothing
      if (state.currentWinner?.time) return;

      // set the winner if it is the first time
      const { id, carFinishTime } = action.payload;
      if (id && state.currentWinner === null && carFinishTime && state.currentRaceStartTime) {
        const time = (carFinishTime - state.currentRaceStartTime) / 1000;
        const wins = state.winners && state.winners[id] ? state.winners[id].wins++ : 1;
        state.currentWinner = { id, wins, time };
      }
    },
  },
});

export const winnerActions = winnerSlice.actions;
export const winnerReducer = winnerSlice.reducer;

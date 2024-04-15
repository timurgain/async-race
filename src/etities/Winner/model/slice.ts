import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { InitialState, WinnerResponse, WinnerRequest } from '../types/types';

const initialState: InitialState = {
  winners: null,
  currentWinner: null,
  isCurrentWinnerPosted: null,
  currentRaceStartTime: null,
  currentRaceFirstFinishTime: null,
};

const winnerSlice = createSlice({
  name: 'winner',
  initialState,
  reducers: {

    setWinners: (state, action: PayloadAction<WinnerResponse[]>) => {
      state.winners = action.payload;
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

      // set the first competitor as the winner
      const { id, carFinishTime } = action.payload;
      if (id && state.currentWinner === null && carFinishTime && state.currentRaceStartTime) {
        const time = (carFinishTime - state.currentRaceStartTime) / 1000;  // best time revised while post/put the winner in usePostPutWinner
        const wins = 1;  // wins amount revised while post/put the winner in usePostPutWinner
        state.currentWinner = { id, wins, time};
        state.isCurrentWinnerPosted = false;
      }
    },

    setIsCurrentWinnerPosted: (state, action: PayloadAction<boolean | null>) => {
      state.isCurrentWinnerPosted = action.payload;
    },
  },
});

export const winnerActions = winnerSlice.actions;
export const winnerReducer = winnerSlice.reducer;

import { StateSchema } from '@/app/redux/store';

export const selectWinner = {
  winners: (state: StateSchema) => state.winner.winners,
  currentWinner: (state: StateSchema) => state.winner.currentWinner,
  isCurrentWinnerPosted: (state: StateSchema) => state.winner.isCurrentWinnerPosted,
  
  currentRaceStartTime: (state: StateSchema) => state.winner.currentRaceStartTime,
  currentRaceFirstFinishTime: (state: StateSchema) => state.winner.currentRaceFirstFinishTime,
};

import { StateSchema } from '@/app/redux/store';

export const selectWinner = {
  winners: (state: StateSchema) => state.winner.winners,
  currentRaceStartTime: (state: StateSchema) => state.winner.currentRaceStartTime,
  currentRaceFirstFinishTime: (state: StateSchema) => state.winner.currentRaceFirstFinishTime,
  currentWinner: (state: StateSchema) => state.winner.currentWinner,
};

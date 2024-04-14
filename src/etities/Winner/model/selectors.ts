import { StateSchema } from "@/app/redux/store";

export const selectWinner = {
  winners: (state: StateSchema) => state.winner.winners,
  currentRaceStart: (state: StateSchema) => state.winner.currentRaceStart,
  currentRaceFirstFinish: (state: StateSchema) => state.winner.currentRaceFirstFinish,
  currentWinner: (state: StateSchema) => state.winner.currentWinner,
}

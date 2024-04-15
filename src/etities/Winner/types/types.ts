import { CarID } from '@/etities/Car';

export type WinnerRequest = {
  id?: CarID;
  wins?: number;
  time?: number;
};

export type WinnerResponse = {
  id: CarID;
  wins: number;
  time: number;
};

export type InitialState = {
  winners: WinnerResponse[] | null;
  currentWinner: WinnerResponse | null;
  isCurrentWinnerPosted: boolean | null;

  currentRaceStartTime: number | null;
  currentRaceFirstFinishTime: number | null;
};

export enum WinnersParams {
  PAGE = '_page',
  LIMIT = '_limit',
  SORT = '_sort',
  ORDER = '_order',
}

export enum WinnersOrder {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum WinnersSort {
  ID = 'id',
  WINS = 'wins',
  TIME = 'time',
}

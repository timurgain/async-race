import { CarID } from "@/etities/Car";

export type Winner = {
  id?: CarID;
  wins: number;
  time: number;
};

export type InitialState = {
  winners: Winner[] | null;
  currentWinner: Winner | null;

  currentRaceStart: number | null;
  currentRaceFirstFinish: number | null;
}
 
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


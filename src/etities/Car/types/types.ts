import { ColorHEXString } from '@/shared/types/types';
import { EngineResponse } from '@/etities/Engine';

export type CarID = number;

export type CarRequest = {
  name?: string;
  color?: ColorHEXString;
};

export type CarResponse = CarRequest & {
  id: CarID;
};

export type CarEngineData = CarResponse & EngineResponse;

export type InitialState = {
  carSelected: CarEngineData | null;
  cars: {
    [id: CarID]: CarEngineData;
  } | null;
  carIDs: CarID[] | null;  // <-- use it for iteration and ordering
};

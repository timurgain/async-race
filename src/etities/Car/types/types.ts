import { ColorHEXString } from '@/shared/types/types';

export type CarID = number;

export type CarRequest = {
  name: string;
  color: ColorHEXString;
};

export type CarResponse = CarRequest & {
  id: CarID;
};

export type InitialState = {
  carSelected: CarResponse | null;
};
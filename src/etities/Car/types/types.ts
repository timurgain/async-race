import { ColorHEXString } from '@/shared/types/types';

export type CarRequest = {
  name: string;
  color: ColorHEXString;
};

export type CarResponse = CarRequest & {
  id: number;
};

export type InitialState = {
  carSelected: CarResponse | null;
};
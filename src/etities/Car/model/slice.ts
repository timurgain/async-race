import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CarEngineData, CarID, InitialState } from '../types/types';

const initialState: InitialState = {
  carSelected: null,
  cars: null,
  carIDs: null,
};

const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    setCars: (state, action: PayloadAction<CarEngineData[]>) => {
      action.payload.forEach((car) => {
        if (!state.cars) state.cars = {};
        if (!state.carIDs) state.carIDs = [];
        state.cars[car.id] = car;
        state.carIDs.push(car.id);
      });
    },
    selectCar: (state, action: PayloadAction<CarID | null>) => {
      if (action.payload === null) state.carSelected = null;
      else state.carSelected = state.cars ? state.cars[action.payload] : null;
    },
    addCar: (state, action: PayloadAction<CarEngineData>) => {
      if (!state.cars) state.cars = {};
      if (!state.carIDs) state.carIDs = [];
      state.cars[action.payload.id] = action.payload;
      state.carIDs.push(action.payload.id);
    },
    mutateCar: (state, action: PayloadAction<CarEngineData>) => {
      console.log('mutateCar', action.payload);
      if (state.cars) {
        const currentData = state.cars[action.payload.id];
        console.log('mutateCar', currentData, action.payload);
        
        state.cars[action.payload.id] = { ...currentData, ...action.payload };
      }
    },
    deleteCar: (state, action: PayloadAction<CarID>) => {
      if (state.cars && state.carIDs) {
        delete state.cars[action.payload];
        state.carIDs = state.carIDs.filter((id) => id !== action.payload);
      }
    },
  },
});

export const carReducer = carSlice.reducer;
export const carActions = carSlice.actions;

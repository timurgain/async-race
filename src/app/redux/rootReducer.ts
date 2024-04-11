import { combineReducers } from '@reduxjs/toolkit';
import { backendAPI } from './api';
import { carReducer } from '@/etities/Car';

export const rootReducer = combineReducers({
  car: carReducer,
  [backendAPI.reducerPath]: backendAPI.reducer,
});

import { combineReducers } from '@reduxjs/toolkit';
import { backendAPI } from './api';

export const rootReducer = combineReducers({
  [backendAPI.reducerPath]: backendAPI.reducer,
});

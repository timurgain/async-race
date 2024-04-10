import { combineReducers } from "@reduxjs/toolkit";
import { rootAPI } from "./rootAPI";

export const rootReducer = combineReducers({
  [rootAPI.reducerPath]: rootAPI.reducer,
});
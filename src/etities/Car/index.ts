export { carAPI } from './api/backend';
export { CarBody } from './ui/CarBody/CarBody';
export { CarTitle } from './ui/CarTitle/CarTitle';
export { carReducer, carActions } from './model/slice';
export { selectCar } from './model/selectors';
export type { CarRequest, CarResponse, CarID } from './types/types';
export { useCarsFetch } from './hooks/useCarsFetch';

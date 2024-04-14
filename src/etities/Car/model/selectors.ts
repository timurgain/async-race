import { StateSchema } from "@/app/redux/store";
import { CarID } from "..";
import { createSelector } from "@reduxjs/toolkit";

export const selectCar = {
  selected: (state: StateSchema) => state.car.carSelected,
  carIDs: (state: StateSchema) => state.car.carIDs,
  cars: (state: StateSchema) => state.car.cars,
  car: (id: CarID) => (state: StateSchema) => state.car.cars ? state.car.cars[id] : null,
  isAnyInDrive: createSelector(
    (state: StateSchema) => state.car.cars,
    (cars) => cars ? Object.values(cars).some((car) => car.drive) : false
  )
}
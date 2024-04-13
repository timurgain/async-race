import { StateSchema } from "@/app/redux/store";
import { CarID } from "..";

export const selectCar = {
  selected: (state: StateSchema) => state.car.carSelected,
  carIDs: (state: StateSchema) => state.car.carIDs,
  cars: (state: StateSchema) => state.car.cars,
  car: (id: CarID) => (state: StateSchema) => state.car.cars ? state.car.cars[id] : null,
}
import { StateSchema } from "@/app/redux/store";

export const selectCar = {
  selected: (state: StateSchema) => state.car.carSelected,
  cars: (state: StateSchema) => state.car.cars,
  carIDs: (state: StateSchema) => state.car.carIDs,
}
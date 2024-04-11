import { StateSchema } from "@/app/redux/store";

export const selectCar = {
  selected: (state: StateSchema) => state.car.carSelected,
}
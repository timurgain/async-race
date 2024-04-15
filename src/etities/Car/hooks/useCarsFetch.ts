import { useDispatch, useSelector } from "@/app/redux/hooks";
import { carAPI } from "../api/backend";
import { selectCar } from "../model/selectors";
import { useEffect } from "react";
import { carActions } from "../model/slice";

export function useCarsFetch() {
  const dispatch = useDispatch();
  
  const cars = useSelector(selectCar.cars);
  const { data, isSuccess, isFetching } = carAPI.useGetCarsQuery();

  useEffect(() => {
    if (isSuccess && !cars) dispatch(carActions.setCars(data));
  }, [isSuccess, cars, data, dispatch]);

  return { isCarsFetching: isFetching };
}

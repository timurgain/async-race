import { useDispatch, useSelector } from "@/app/redux/hooks";
import { carAPI } from "../api/backend";
import { selectCar } from "../model/selectors";
import { useEffect } from "react";
import { carActions } from "../model/slice";
import { CarResponse } from "../types/types";

export function useGarageCarsFetch() {
  const dispatch = useDispatch();
  
  // const cars = useSelector(selectCar.cars);
  const carsQueryParams = useSelector(selectCar.carsQueryParams);
  const { data, isSuccess, isFetching } = carAPI.useGetCarsQuery(carsQueryParams);
  const cars = data?.data;

  useEffect(() => {
    if (isSuccess) dispatch(carActions.setCars(cars as CarResponse[]));
  }, [isSuccess, carsQueryParams, data, dispatch]);

  return { isCarsFetching: isFetching };
}

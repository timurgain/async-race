
import { useDispatch, useSelector } from "@/app/redux/hooks";
import { carAPI } from "../api/backend";
import { selectCar } from "../model/selectors";
import { useEffect } from "react";
import { carActions } from "../model/slice";

export function useGarageCarsFetch() {
  const dispatch = useDispatch();
  
  // const cars = useSelector(selectCar.cars);
  const carsQueryParams = useSelector(selectCar.carsQueryParams);
  const { data, isSuccess, isFetching } = carAPI.useGetCarsQuery(carsQueryParams);

  useEffect(() => {
    if (isSuccess) dispatch(carActions.setCars(data));
  }, [isSuccess, carsQueryParams, data, dispatch]);

  return { isCarsFetching: isFetching };
}

import { useDispatch, useSelector } from '@/app/redux/hooks';
import { carAPI } from '../api/backend';
import { selectCar } from '../model/selectors';
import { useEffect } from 'react';
import { carActions } from '../model/slice';
import { CarResponse } from '../types/types';

export function useGarageCarsFetch() {
  const dispatch = useDispatch();

  const carsClient = useSelector(selectCar.carIDs);
  const carsQueryParams = useSelector(selectCar.carsQueryParams);
  const { data, isSuccess, isFetching } = carAPI.useGetCarsQuery(carsQueryParams);
  const carsServer = data?.data;

  useEffect(() => {
    if (isSuccess && (carsClient?.length !== carsServer?.length))
      dispatch(carActions.setCars(carsServer as CarResponse[]));
  }, [isSuccess, carsClient, carsServer, carsQueryParams, data, dispatch]);

  return { isCarsFetching: isFetching };
}

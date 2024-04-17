import { Pagination } from '@/features/Pagination';
import styles from './GarageBottomControls.module.scss';
import { Total } from '@/shared/ui/Total/Total';
import { useDispatch, useSelector } from '@/app/redux/hooks';
import { carAPI, carActions, selectCar } from '@/etities/Car';
import { CarResponse, CarsParams } from '@/etities/Car/types/types';
import { useEffect } from 'react';
import { winnerActions } from '@/etities/Winner';

type Props = {};

export function GarageBottomControls({}: Props) {
  // 0. Init

  const dispatch = useDispatch();
  const params = useSelector(selectCar.carsQueryParams);
  const { data, isSuccess, isLoading } = carAPI.useGetCarsQuery(params);
  const carsServer = data?.data;
  const carClientIDs = useSelector(selectCar.carIDs);
  const currentPage = params[CarsParams.PAGE];
  const limit = params[CarsParams.LIMIT];
  const totalCount = data?.totalCount;

  // 1. Fetch and set carsServer as carsClient if there is differense,
  // usually on page scroll, cars adding or removing, then reset the winner.

  useEffect(() => {
    if (isLoading || !isSuccess) return;
    if (!carsServer || !carClientIDs) return;
    if (carsServer.every((car) => carClientIDs.includes(car.id))) return;
    dispatch(carActions.setCars(carsServer as CarResponse[]));
    dispatch(winnerActions.mutateCurrentWinner(null));
  }, [isLoading, carsServer, dispatch]);

  // 2. Render

  return (
    <section className={styles.section}>
      <Total entity="Cars" total={totalCount || 0} />
      <Pagination
        currentPage={currentPage || 1}
        limit={limit || 1}
        totalCount={totalCount || 1}
        scrollPage={(page: number) => {
          dispatch(carActions.mutateCarsQueryParams({ [CarsParams.PAGE]: page }));
        }}
      />
    </section>
  );
}

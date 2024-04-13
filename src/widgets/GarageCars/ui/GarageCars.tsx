import { CarBody, CarTitle, carAPI, carActions, selectCar } from '@/etities/Car';
import styles from './GarageCars.module.scss';
import { CarSelect } from '@/features/CarSelect';
import { EngineDrive } from '@/features/EngineDrive';
import { EngineStop } from '@/features/EngineStop';
import { useDispatch, useSelector } from '@/app/redux/hooks';
import { useEffect } from 'react';
import { CarDelete } from '@/features/CarDelete';

type Props = {};

export function GarageCars({}: Props) {
  // 0. Init

  const dispatch = useDispatch();
  const cars = useSelector(selectCar.cars);
  const carIDs = useSelector(selectCar.carIDs);
  const { data, isSuccess } = carAPI.useGetCarsQuery();

  useEffect(() => {
    if (isSuccess && !cars) dispatch(carActions.setCars(data));
  }, [isSuccess, cars, data, dispatch]);

  // 1. Render

  if (!cars) return null;

  return (
    <ul className={styles.garage}>
      {carIDs?.map((id) => {
        if (!cars[id]) return null;

        return (
          <li key={id} className={styles.item}>
            <div className={styles.item__control}>
              <CarSelect carID={id} />
              <EngineDrive carID={id} />
              <CarDelete carID={id} />
              <EngineStop carID={id} />
            </div>
            <div className={styles.item__track}>
              <CarBody color={cars[id].color as string} />
              <CarTitle color={cars[id].color as string} title={cars[id].name as string} />
            </div>
          </li>
        );
      })}
    </ul>
  );
}

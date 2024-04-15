import { CarBody, CarTitle, selectCar, useCarsFetch } from '@/etities/Car';
import styles from './GarageCars.module.scss';
import { CarSelect } from '@/features/CarSelect';
import { EngineDrive } from '@/features/EngineDrive';
import { EngineStop } from '@/features/EngineStop';
import { useSelector } from '@/app/redux/hooks';
import { useRef } from 'react';
import { CarDelete } from '@/features/CarDelete';

type Props = {};

export function GarageCars({}: Props) {
  // 0. Init
  useCarsFetch();
  const selectedID = useSelector(selectCar.selected)?.id;
  const cars = useSelector(selectCar.cars);
  const carIDs = useSelector(selectCar.carIDs);

  // 1. Track width

  const trackRef = useRef<HTMLDivElement>(null);
  const trackWidth = trackRef.current?.offsetWidth;

  // 2. Render

  if (!cars) return null;

  return (
    <ul className={styles.garage}>
      {carIDs?.map((id) => {
        if (!cars[id]) return null;

        return (
          <li key={id} className={styles.item}>
            <div className={styles.item__control}>
              <CarSelect carID={id} isSelected={id === selectedID}/>
              <EngineDrive carID={id} />
              <CarDelete carID={id} />
              <EngineStop carID={id} />
            </div>
            <div className={styles.item__track} ref={trackRef}>
              <CarBody car={cars[id]} trackWidth={trackWidth as number} />
              <CarTitle
                color={cars[id].color as string}
                title={cars[id].name as string}
                driveMode={cars[id]?.drive}
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
}

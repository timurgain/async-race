import { CarBody, CarTitle, carAPI } from '@/etities/Car';
import styles from './GarageCars.module.scss';
import { CarSelect } from '@/features/CarSelect';
import { CarRemove } from '@/features/CarRemove';
import { EngineDrive } from '@/features/EngineDrive';
import { EngineStop } from '@/features/EngineStop';

type Props = {};

export function GarageCars({}: Props) {
  const { data } = carAPI.useGetCarsQuery();

  return (
    <ul className={styles.garage}>
      {data?.map((car) => (
        <li key={car.id} className={styles.item}>
          <div className={styles.item__control}>
            <CarSelect />
            <EngineDrive />
            <CarRemove />
            <EngineStop />
          </div>
          <div className={styles.item__track}>
            <CarBody color={car.color} />
            <CarTitle color={car.color} title={car.name} />
          </div>
        </li>
      ))}
    </ul>
  );
}

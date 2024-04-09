import styles from './GarageControls.module.scss';
import { CarsRace } from '@/features/CarsRace';
import { CarsReset } from '@/features/CarsReset';
import { CarCreate } from '@/features/CarCreate';
import { CarUpdate } from '@/features/CarUpdate';
import { CarsGenerate } from '@/features/CarsGenerate';

type Props = {};

export function GarageControls({}: Props) {
  return (
    <section className={styles.controls}>
      <CarsRace />
      <CarsReset />
      <CarCreate />
      <CarUpdate />
      <CarsGenerate />
    </section>
  );
}

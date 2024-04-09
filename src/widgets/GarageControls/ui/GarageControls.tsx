import { RaceCars } from '@/features/RaceCars';
import styles from './GarageControls.module.scss';
import { ResetCars } from '@/features/ResetCars';

type Props = {}

export function GarageControls({}: Props) {
  return (
    <section className={styles.controls}>
      <RaceCars />
      <ResetCars />
    </section>
  )
}


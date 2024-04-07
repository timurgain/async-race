import { RaceCars } from '@/features/RaceCars';
import styles from './GarageControls.module.scss';

type Props = {}

export function GarageControls({}: Props) {
  return (
    <section className={styles.controls}>
      <RaceCars />
    </section>
  )
}


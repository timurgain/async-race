import { ColorHEXString } from '@/shared/types/types';
import styles from './CarBody.module.scss';
import CarIcon from '@/shared/assets/icons/car.svg?react';

type Props = {
  color: ColorHEXString;
};

export function CarBody({ color }: Props) {
  return (
    <div className={styles.car} style={{ color: color }}>
      <CarIcon className={styles.car__icon} />
    </div>
  );
}

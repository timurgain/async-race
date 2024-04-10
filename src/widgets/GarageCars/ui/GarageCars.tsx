import { carAPI } from '@/etities/Car';
import styles from './GarageCars.module.scss';

type Props = {}

export function GarageCars({}: Props) {

  const {data} = carAPI.useGetCarsQuery()

  return (
    <ul className={styles.example}>
      {data?.map((car) => (
        <li key={car.id}>{car.name}</li>
      ))}
    </ul>
  )
}


import clsx from 'clsx';
import styles from './WinnersTable.module.scss';
import { winnerAPI } from '@/etities/Winner';
import { CarBody, selectCar, useCarsFetch } from '@/etities/Car';
import { useSelector } from '@/app/redux/hooks';

type Props = {};

export function WinnersTable({}: Props) {
  // 0. Init
  useCarsFetch();
  const cars = useSelector(selectCar.cars);
  const { data: winners } = winnerAPI.useGetWinnersQuery();

  // 1. Render

  if (!winners || !cars) return <p>Loading...</p>;

  return (
    <section className={styles.winners}>
      <div className={clsx(styles.winners__row, styles.winners__row_type_header)}>
        <p>№</p>
        <p>CAR</p>
        <p>NAME</p>
        <p>WINS</p>
        <p>BEST TIME, sec</p>
      </div>

      {winners?.map((winner) => {
        return (
        <div key={winner.id} className={styles.winners__row}>
          <p>{winner.id}</p>
          <CarBody isAnimated={false} car={cars[winner.id]} trackWidth={0}/>
          <p>{cars[winner.id]?.name}</p>
          <p>{winner.wins}</p>
          <p>{winner.time}</p>
        </div>);
      })}
    </section>
  );
}

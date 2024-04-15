import clsx from 'clsx';
import styles from './WinnersTable.module.scss';
import { selectWinner, winnerAPI, winnerActions } from '@/etities/Winner';
import { useEffect } from 'react';
import { useDispatch, useSelector } from '@/app/redux/hooks';

type Props = {};

export function WinnersTable({}: Props) {
  // 0. Init

  const dispatch = useDispatch();
  const winners = useSelector(selectWinner.winners);
  const { data, isSuccess } = winnerAPI.useGetWinnersQuery();

  useEffect(() => {
    if (isSuccess && !winners) dispatch(winnerActions.setWinners(data));
  }, [isSuccess, winners, data, dispatch]);

  // 1. Render
  
  return (
    <section className={styles.winners}>
      <div className={clsx(styles.winners__row, styles.winners__row_type_header)}>
        <p>№</p>
        <p>CAR</p>
        <p>NAME</p>
        <p>WINS</p>
        <p>BEST TIME, sec</p>
      </div>


      <div className={styles.winners__row}>

      </div>
    </section>
  );
}

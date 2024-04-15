import styles from './WinnerModal.module.scss';

import { useSelector } from '@/app/redux/hooks';
import { selectWinner } from '../..';
import { Modal } from '@/shared/ui/Modal/Modal';
import { useEffect, useState } from 'react';
import { selectCar } from '@/etities/Car';

type Props = {};

export function WinnerModal({}: Props) {
  // 0. Init
  const winner = useSelector(selectWinner.currentWinner);
  const car = useSelector(selectCar.car(winner?.id));
  let [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (winner) setOpen(true);
    if (!winner) setOpen(false);
  }, [winner]);

  if (!winner || !car) return null;

  return (
    <Modal isOpen={isOpen} onOpenChange={setOpen}>
      <article className={styles.winner}>
        <h2>THE WINNER IS:</h2>
        <p>{car?.name?.toUpperCase()}</p>
        <p>{`TIME: ${winner?.time} S`}</p>
      </article>
    </Modal>
  );
}

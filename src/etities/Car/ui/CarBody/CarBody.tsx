import styles from './CarBody.module.scss';
import CarIcon from '@/shared/assets/icons/car.svg?react';
import { CarEngineData } from '../../types/types';
import { useEffect, useRef } from 'react';
import { EngineDriveMode } from '@/etities/Engine';
import { useDispatch } from '@/app/redux/hooks';
import { carActions } from '../../model/slice';

type Props = {
  car: CarEngineData;
  trackWidth: number;
};

export function CarBody({ car, trackWidth }: Props) {
  // 0. Init

  const carRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const distance = trackWidth - carRef.current?.offsetWidth!;

  // 1. Animation

  function animateCar(currentTime: number, startTime: number) {
    const SLOWDOWN_RATIO = 20;
    const elapsedTime = currentTime - startTime;
    const requiredTime = (car.velocity as number) * SLOWDOWN_RATIO;

    const progress = Math.min(elapsedTime / requiredTime, 1);
    const translateX = progress * distance;

    if (carRef.current) {
      carRef.current.style.transform = `translateX(${translateX}px)`;
    }
    if (progress < 1) {
      requestAnimationFrame((currentTime) => animateCar(currentTime, startTime));
    } else if (progress === 1) {
      dispatch(carActions.mutateCar({ id: car.id, translateX }));
      console.log('Car arrived', car.id, requiredTime);
      
    }
  }

  // 1.1 Start animation
  useEffect(() => {
    if (!car.velocity || !carRef.current) return;
    if (car.drive === EngineDriveMode.DRIVE && !car.translateX) {
      const startTime = performance.now();
      requestAnimationFrame((currentTime) => animateCar(currentTime, startTime));
    }
  }, [car]);

  // 1.2 Reset animation
  useEffect(() => {
    if (!carRef.current) return;
    if (car.drive === EngineDriveMode.RESET) {
      carRef.current.style.transform = 'translateX(0)';
      dispatch(carActions.mutateCar({ id: car.id, drive: null }));
    }
  }, [car]);

  // 2. Render

  return (
    <div
      className={styles.car}
      style={{
        color: car.color,
        transform: car.translateX ? `translateX(${car.translateX}px)` : `translateX(0px)`,
      }}
      ref={carRef}
    >
      <CarIcon className={styles.car__icon} />
    </div>
  );
}

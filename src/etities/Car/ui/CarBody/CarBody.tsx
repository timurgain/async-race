import styles from './CarBody.module.scss';
import CarIcon from '@/shared/assets/icons/car.svg?react';
import { CarEngineData } from '../../types/types';
import { useEffect, useRef } from 'react';

type Props = {
  car: CarEngineData;
  trackWidth: number;
};

export function CarBody({ car, trackWidth }: Props) {
  // 0. Init

  const carRef = useRef<HTMLDivElement>(null);
  const distance = trackWidth - carRef.current?.offsetWidth!;

  // 1. Animation

  function animateCar(currentTime: number, startTime: number) {
    const SLOWDOWN_RATIO = 10;
    const elapsedTime = currentTime - startTime;
    const requiredTime = car.velocity as number * SLOWDOWN_RATIO;

    const progress = Math.min(elapsedTime / requiredTime, 1);
    if (carRef.current) {
      carRef.current.style.transform = `translateX(${progress * distance}px)`;
    }
    if (progress < 1) {
      requestAnimationFrame((currentTime) => animateCar(currentTime, startTime));
    }
  };

  // 1.1 Start animation
  useEffect(() => {
    if (!car.velocity || !carRef.current) return;
    if (car.success) {
      const startTime = performance.now();
      requestAnimationFrame((currentTime) => animateCar(currentTime, startTime));
    }
  }, [car]);

  // 1.2 Reset animation
  useEffect(() => {
    if (!carRef.current) return;
    if (!car.success) carRef.current.style.transform = 'translateX(0)';
  }, [car.success]);

  // 2. Render

  return (
    <div className={styles.car} style={{ color: car.color }} ref={carRef}>
      <CarIcon className={styles.car__icon} />
    </div>
  );
}

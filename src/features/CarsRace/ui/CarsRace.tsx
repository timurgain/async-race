import { Button, ButtonKits } from '@/shared/ui/Button/Button';
import PlayIcon from '@/shared/assets/icons/play.svg?react';

type Props = {};

export function CarsRace({}: Props) {
  // 0. Config

  // 1. Actions

  function carsRace() {
    console.log('CarsRace');
  }

  // Render

  return (
    <Button kit={ButtonKits.PRYMARY_M_GREEN} onClick={carsRace}>
      <span>RACE</span>
      <PlayIcon />
    </Button>
  );
}

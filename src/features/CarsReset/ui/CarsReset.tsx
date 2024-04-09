import { Button, ButtonKits } from '@/shared/ui/Button/Button';
import ResetIcon from '@/shared/assets/icons/reset.svg?react';

type Props = {
  className?: string;
};

export function CarsReset({ className }: Props) {
  // 0. Config

  // 1. Actions

  function resetCars() {
    console.log('CarsReset');
  }

  // Render

  return (
    <Button kit={ButtonKits.PRYMARY_M_PURPLE} onClick={resetCars} className={className}>
      <span>RESET</span>
      <ResetIcon />
    </Button>
  );
}

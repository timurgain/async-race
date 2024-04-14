import { useSelector } from '@/app/redux/hooks';
import { CarID, selectCar } from '@/etities/Car';
import { Button, ButtonKits } from '@/shared/ui/Button/Button';
import ResetIcon from '@/shared/assets/icons/reset.svg?react';
import { useStopEngine } from '../hooks/useStopEngine';

type Props = {
  carID: CarID;
};

export function EngineStop({ carID }: Props) {
  
  // 0. Init

  const car = useSelector(selectCar.car(carID));
  const { stopEngine, isLoading } = useStopEngine({ carID });

  // 1. Render

  return (
    <Button
      kit={ButtonKits.PRYMARY_S_GREEN}
      onClick={stopEngine}
      disabled={!car?.drive || isLoading}
    >
      <ResetIcon />
    </Button>
  );
}

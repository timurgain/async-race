import { useDispatch, useSelector } from '@/app/redux/hooks';
import { CarID, carActions, selectCar } from '@/etities/Car';
import { EngineDriveMode, engineAPI } from '@/etities/Engine';
import { Button, ButtonKits } from '@/shared/ui/Button/Button';
import { useEffect } from 'react';

type Props = {
  carID: CarID;
};

export function EngineStop({ carID }: Props) {
  // 0. Init

  const dispatch = useDispatch();
  const car = useSelector(selectCar.car(carID));
  const [stopEngine, { isSuccess: isEngineStopped, isLoading }] = engineAPI.useStopEngineMutation();

  // 1. Actions

  function stop() {
    stopEngine({ id: carID });
  }

  useEffect(() => {
    if (isEngineStopped)
      dispatch(carActions.mutateCar({ id: carID, success: false, drive: EngineDriveMode.RESET }));
  }, [isEngineStopped]);

  // 2. Render

  return (
    <Button kit={ButtonKits.PRYMARY_S_GREEN} onClick={stop} disabled={!car?.drive || isLoading}>
      B
    </Button>
  );
}

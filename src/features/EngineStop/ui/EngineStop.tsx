import { useDispatch, useSelector } from '@/app/redux/hooks';
import { CarID, carActions, selectCar } from '@/etities/Car';
import { engineAPI } from '@/etities/Engine';
import { Button, ButtonKits } from '@/shared/ui/Button/Button';
import { useEffect } from 'react';

type Props = {
  carID: CarID;
};

export function EngineStop({ carID }: Props) {
  // 0. Init

  const dispatch = useDispatch();
  const car = useSelector(selectCar.car(carID));
  const [stopEngine, { data, isSuccess }] = engineAPI.useStopEngineMutation();

  // 1. Actions

  function stop() {
    stopEngine({ id: carID });
  }

  useEffect(() => {
    if (isSuccess && data) dispatch(carActions.mutateCar({ id: carID, success: false, ...data }));
  }, [data, isSuccess]);

  // 2. Render

  return <Button kit={ButtonKits.PRYMARY_S_GREEN} onClick={stop} disabled={!car?.success}>B</Button>;
}

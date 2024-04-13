import { useDispatch, useSelector } from '@/app/redux/hooks';
import { CarID, carActions, selectCar } from '@/etities/Car';
import { engineAPI } from '@/etities/Engine';
import { Button, ButtonKits } from '@/shared/ui/Button/Button';
import { useEffect } from 'react';

type Props = {
  carID: CarID;
};

export function EngineDrive({ carID }: Props) {
  // 0. Init

  const dispatch = useDispatch();
  const car = useSelector(selectCar.car(carID));
  const [startEngine, { data: specs, isSuccess: isStarted }] = engineAPI.useStartEngineMutation();
  const [driveEngine, { data: driveStatus, isSuccess: isDriving }] = engineAPI.useDriveEngineMutation();

  // 1. Actions

  function drive() {
    startEngine({ id: carID }).unwrap().then(() => driveEngine({ id: carID }))
  }

  useEffect(() => {
    if (isStarted && specs) dispatch(carActions.mutateCar({ id: carID, ...specs }));
  }, [specs, isStarted]);

  useEffect(() => {
    if (isDriving && driveStatus) dispatch(carActions.mutateCar({ id: carID, ...driveStatus }));
  }, [driveStatus, isDriving]);

  // 2. Render

  return (
    <Button kit={ButtonKits.PRYMARY_S_YELLOW} onClick={drive} disabled={car?.success}>
      A
    </Button>
  );
}

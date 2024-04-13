import { useDispatch, useSelector } from '@/app/redux/hooks';
import { CarID, carActions, selectCar } from '@/etities/Car';
import { EngineDriveMode, engineAPI } from '@/etities/Engine';
import { Button, ButtonKits } from '@/shared/ui/Button/Button';
import { useEffect } from 'react';

type Props = {
  carID: CarID;
};

export function EngineDrive({ carID }: Props) {
  // 0. Init

  const dispatch = useDispatch();
  const car = useSelector(selectCar.car(carID));

  const [startEngine, { data: engineSpecs, isSuccess: isStarted, isLoading: isLoadingStart }] =
    engineAPI.useStartEngineMutation();
  const [
    driveEngine,
    { data: driveResponse, isSuccess: isDriveMode, isError, isLoading: isLoadingDrive },
  ] = engineAPI.useDriveEngineMutation();

  // 1. Actions

  function drive() {
    startEngine({ id: carID })
      .unwrap()
      .then(() => driveEngine({ id: carID }));
  }

  useEffect(() => {
    if (isStarted && engineSpecs) dispatch(carActions.mutateCar({ id: carID, ...engineSpecs }));
  }, [engineSpecs, isStarted]);

  useEffect(() => {
    if (driveResponse && isDriveMode)
      dispatch(carActions.mutateCar({ id: carID, drive: EngineDriveMode.DRIVE }));
    if (isError) dispatch(carActions.mutateCar({ id: carID, drive: EngineDriveMode.BROKEN }));
  }, [driveResponse, isDriveMode, isError]);

  // 2. Render

  return (
    <Button
      kit={ButtonKits.PRYMARY_S_YELLOW}
      onClick={drive}
      disabled={!!car?.drive || isLoadingStart || isLoadingDrive}
    >
      A
    </Button>
  );
}

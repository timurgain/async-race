import { useDispatch } from '@/app/redux/hooks';
import { CarID, carActions } from '@/etities/Car';
import { EngineDriveMode, engineAPI } from '@/etities/Engine';
import { useCallback, useEffect } from 'react';

type Props = {
  carID: CarID;
};

export function useStartDriveEngine({carID}: Props) {
  // 0. Init

  const dispatch = useDispatch();

  const [startEngine, { data: engineSpecs, isSuccess: isStarted, isLoading: isLoadingStart }] =
    engineAPI.useStartEngineMutation();
  const [
    driveEngine,
    { data: driveResponse, isSuccess: isDriveMode, isError, isLoading: isLoadingDrive },
  ] = engineAPI.useDriveEngineMutation();

  // 1. Actions

  const startDriveEngine = useCallback(() => {
    startEngine({ id: carID })
      .unwrap()
      .then(() => driveEngine({ id: carID }));
  }, [startEngine, driveEngine, carID]);

  useEffect(() => {
    if (isStarted && engineSpecs) dispatch(carActions.mutateCar({ id: carID, ...engineSpecs }));
  }, [engineSpecs, isStarted]);

  useEffect(() => {
    if (driveResponse && isDriveMode)
      dispatch(carActions.mutateCar({ id: carID, drive: EngineDriveMode.DRIVE }));
    if (isError) dispatch(carActions.mutateCar({ id: carID, drive: EngineDriveMode.BROKEN }));
  }, [driveResponse, isDriveMode, isError]);

  // Return

  return {
    startDriveEngine,
    isLoading: isLoadingStart || isLoadingDrive,
  };
}

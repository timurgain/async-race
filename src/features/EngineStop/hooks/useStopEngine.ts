import { useDispatch } from '@/app/redux/hooks';
import { CarID, carActions } from '@/etities/Car';
import { EngineDriveMode, engineAPI } from '@/etities/Engine';
import { useCallback, useEffect } from 'react';

type Props = {
  carID: CarID;
};

export function useStopEngine({ carID }: Props) {
  // 0. Init

  const dispatch = useDispatch();
  const [stop, { isSuccess: isEngineStopped, isLoading }] = engineAPI.useStopEngineMutation();

  // 1. Actions

  const stopEngine = useCallback(() => {
    stop({ id: carID });
  }, [stop, carID]);

  useEffect(() => {
    if (isEngineStopped)
      dispatch(carActions.mutateCar({ id: carID, success: false, drive: EngineDriveMode.RESET }));
  }, [isEngineStopped]);

  // Return

  return {
    stopEngine,
    isLoading,
  };
}

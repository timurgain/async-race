import { useDispatch, useSelector } from '@/app/redux/hooks';
import { CarID, carActions } from '@/etities/Car';
import { EngineDriveMode, engineAPI } from '@/etities/Engine';
import { selectWinner, winnerActions } from '@/etities/Winner';
import { useCallback, useEffect } from 'react';

type Props = {
  carID: CarID;
};

export function useStopEngine({ carID }: Props) {
  // 0. Init

  const dispatch = useDispatch();
  const currentWinner = useSelector(selectWinner.currentWinner)
  const [stop, { isSuccess: isEngineStopped, isLoading }] = engineAPI.useStopEngineMutation();

  // 1. Actions

  const stopEngine = useCallback(() => {
    stop({ id: carID });
  }, [stop, carID]);

  useEffect(() => {
    if (isEngineStopped) {
      // Reset car
      dispatch(
        carActions.mutateCar({
          id: carID,
          drive: EngineDriveMode.RESET,
        })
      );
      // Reset winner cos race is stopped if even one car is reset
      if (currentWinner) dispatch(winnerActions.mutateCurrentWinner(null));
    }
  }, [isEngineStopped]);

  // Return

  return {
    stopEngine,
    isLoading,
  };
}

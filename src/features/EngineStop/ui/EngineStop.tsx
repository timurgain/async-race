import { useDispatch } from '@/app/redux/hooks';
import { CarID, carActions } from '@/etities/Car';
import { engineAPI } from '@/etities/Engine';
import { EngineStatus } from '@/etities/Engine/types/types';
import { Button, ButtonKits } from '@/shared/ui/Button/Button';
import { useEffect } from 'react';

type Props = {
  carID: CarID;
};

export function EngineStop({ carID }: Props) {
  // 0. Init

  const dispatch = useDispatch();
  const [patchEngine, { data, isSuccess }] = engineAPI.usePatchEngineMutation();

  // 1. Actions

  function stop() {
    patchEngine({ id: carID, status: EngineStatus.STOPPED });
  }

  useEffect(() => {
    if (isSuccess && data) dispatch(carActions.mutateCar({ id: carID, ...data }));
  }, [data, isSuccess]);

  // 2. Render

  return <Button kit={ButtonKits.PRYMARY_S_GREEN} onClick={stop}>B</Button>;
}

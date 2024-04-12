import { useDispatch } from '@/app/redux/hooks';
import { carAPI, carActions } from '@/etities/Car';
import { CarID } from '@/etities/Car/types/types';
import { Button, ButtonKits } from '@/shared/ui/Button/Button';
import { useEffect } from 'react';

type Props = {
  carID: CarID;
};

export function CarDelete({ carID }: Props) {
  // 0. Init
  const dispatch = useDispatch();
  const [deleteCar, {isSuccess}] = carAPI.useDeleteCarMutation();

  useEffect(() => {
    if (isSuccess) dispatch(carActions.deleteCar(carID));
  }, [isSuccess]);

  // Render
  return (
    <Button kit={ButtonKits.PRYMARY_S_PURPLE} onClick={() => deleteCar({ id: carID })}>
      REMOVE
    </Button>
  );
}

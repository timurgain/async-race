import { carAPI } from '@/etities/Car';
import { CarID } from '@/etities/Car/types/types';
import { Button, ButtonKits } from '@/shared/ui/Button/Button';

type Props = {
  carID: CarID;
};

export function CarRemove({ carID }: Props) {
  // 0. Init
  const [deleteCar] = carAPI.useDeleteCarMutation();

  // Render
  return (
    <Button kit={ButtonKits.PRYMARY_S_PURPLE} onClick={() => deleteCar({ id: carID })}>
      REMOVE
    </Button>
  );
}

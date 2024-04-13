import { useDispatch } from '@/app/redux/hooks';
import { CarID, carActions } from '@/etities/Car';
import { Button, ButtonKits } from '@/shared/ui/Button/Button';

type Props = {
  carID: CarID;
  isSelected: boolean;
};

export function CarSelect({ carID, isSelected }: Props) {
  const dispatch = useDispatch();

  function selectCar() {
    dispatch(carActions.selectCar(carID));
  }

  return (
    <Button kit={ButtonKits.PRYMARY_S_BLUE} onClick={selectCar} disabled={isSelected}>
      SELECT
    </Button>
  );
}

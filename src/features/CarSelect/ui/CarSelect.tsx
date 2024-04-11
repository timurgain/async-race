import { useDispatch } from '@/app/redux/hooks';
import { CarResponse, carActions } from '@/etities/Car';
import { Button, ButtonKits } from '@/shared/ui/Button/Button';

type Props = {
  car: CarResponse;
};

export function CarSelect({ car }: Props) {
  const dispatch = useDispatch();

  function selectCar() {
    dispatch(carActions.selectCar(car));
  }

  return (
    <Button kit={ButtonKits.PRYMARY_S_BLUE} onClick={selectCar}>
      SELECT
    </Button>
  );
}

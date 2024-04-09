import { Button, ButtonKits } from '@/shared/ui/Button/Button';

type Props = {}

export function CarsGenerate({}: Props) {
  // 0. Config

  // 1. Actions

  function generateCars() {
    console.log('CarsGenerate');
  }

  // Render

  return (
    <Button kit={ButtonKits.PRYMARY_M_GREEN} onClick={generateCars}>
      <span>GENERATE CARS</span>
    </Button>
  );
}


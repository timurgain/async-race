import { Button, ButtonKits } from '@/shared/ui/Button/Button';

type Props = {
  className?: string;
}

export function CarsGenerate({className}: Props) {
  // 0. Config

  // 1. Actions

  function generateCars() {
    console.log('CarsGenerate');
  }

  // Render

  return (
    <Button kit={ButtonKits.PRYMARY_M_GREEN} onClick={generateCars} className={className}>
      <span>GENERATE CARS</span>
    </Button>
  );
}


import { Button, ButtonKits } from '@/shared/ui/Button/Button';
import PlayIcon from '@/shared/assets/icons/play.svg?react';

type Props = {};

export function RaceCars({}: Props) {

  // 0. Config

  // 1. Actions

  function raceCars() {
    console.log('raceCars');
  }
  
  // Render

  return (
    <Button kit={ButtonKits.PRYMARY_M_GREEN} onClick={raceCars}>
      <span>RACE</span>
      <PlayIcon />
    </Button>
  );
}

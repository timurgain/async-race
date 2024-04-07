import { Button, ButtonKits } from '@/shared/ui/Button/Button';
import PlayIcon from '@/shared/assets/icons/play.svg?react';

type Props = {};

export function RaceCars({}: Props) {
  return (
    <Button kit={ButtonKits.PRYMARY_M_GREEN}>
      <span>RACE</span>
      <PlayIcon />
    </Button>
  );
}

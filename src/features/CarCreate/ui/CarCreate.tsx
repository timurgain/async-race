import { Input, InputKits } from '@/shared/ui/Input/Input';
import styles from './CarCreate.module.scss';
import { Button, ButtonKits } from '@/shared/ui/Button/Button';
import clsx from 'clsx';

type Props = {
  className?: string;
};

export function CarCreate({className}: Props) {
  return (
    <form className={clsx(styles.form, className)}>
      <Input kit={InputKits.PRINARY_M} placeholder="TYPE CAR BRAND" />
      {/* ColorPickerTrigger */}
      <Button kit={ButtonKits.PRYMARY_M_PURPLE}>CREATE</Button>
    </form>
  );
}
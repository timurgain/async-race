import { Input, InputKits } from '@/shared/ui/Input/Input';
import styles from './CarCreate.module.scss';
import { Button, ButtonKits } from '@/shared/ui/Button/Button';

type Props = {};

export function CarCreate({}: Props) {
  return (
    <form className={styles.form}>
      <Input kit={InputKits.PRINARY_M} placeholder="TYPE CAR BRAND" />
      {/* ColorPickerTrigger */}
      <Button kit={ButtonKits.PRYMARY_M_PURPLE}>CREATE</Button>
    </form>
  );
}

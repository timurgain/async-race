import { Input, InputKits } from '@/shared/ui/Input/Input';
import styles from './CarUpdate.module.scss';
import { Button, ButtonKits } from '@/shared/ui/Button/Button';

type Props = {};

export function CarUpdate({}: Props) {
  return (
    <form className={styles.form}>
      <Input kit={InputKits.PRINARY_M} placeholder="TYPE CAR BRAND" />
      {/* ColorPickerTrigger */}
      <Button kit={ButtonKits.PRYMARY_M_PURPLE}>UPDATE</Button>
    </form>
  );
}

import { ColorHEXString } from '@/shared/types/types';
import styles from './CarTitle.module.scss';

type Props = {
  color: ColorHEXString;
  title: string;
};

export function CarTitle({ color, title }: Props) {
  return (
    <span className={styles.title} style={{ color: color }}>
      {title.toUpperCase()}
    </span>
  );
}

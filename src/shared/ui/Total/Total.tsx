import styles from './Total.module.scss';

type Props = {
  entity: string;
  total: number | string;
};

export function Total({ entity, total }: Props) {
  return (
    <p className={styles.total}>
      {entity}{total}
    </p>
  );
}

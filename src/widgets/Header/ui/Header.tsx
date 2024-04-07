import styles from './Header.module.scss';
import { PageNavigation } from '@/features/PageNavigation';

type Props = {};

export function Header({}: Props) {
  return (
    <header className={styles.header}>
      <PageNavigation />
    </header>
  );
}

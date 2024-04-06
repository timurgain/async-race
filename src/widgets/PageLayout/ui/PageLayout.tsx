import React from 'react';
import styles from './PageLayout.module.scss';

type Props = {
  children: React.ReactNode;
};

export function PageLayout({ children }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.container__breakpoints}>{children}</div>
    </div>
  );
}

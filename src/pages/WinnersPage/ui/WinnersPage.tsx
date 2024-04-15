import React from 'react';
import styles from './WinnersPage.module.scss';
import { Header } from '@/widgets/Header';
import { WinnersTable } from '@/widgets/WinnersTable';

export default function WinnersPage(): React.ReactNode {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.main__header}>WINNERS</h1>
        <WinnersTable />
      </main>
    </>
  );
}

import React from 'react';
import styles from './GaragePage.module.scss';
import { Header } from '@/widgets/Header';
import { GarageControls } from '@/widgets/GarageControls';
import { GarageCars } from '@/widgets/GarageCars';
import { WinnerModal } from '@/etities/Winner';
import { GarageBottomControls } from '@/widgets/GarageBottomControls';

export default function GaragePage(): React.ReactNode {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <GarageControls />
        <GarageCars />
        <GarageBottomControls />
      </main>
      <WinnerModal />
    </>
  );
}

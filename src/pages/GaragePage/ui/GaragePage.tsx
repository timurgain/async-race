import React from 'react';
import styles from './GaragePage.module.scss';
import { Header } from '@/widgets/Header';
import { GarageControls } from '@/widgets/GarageControls';
import { RacingTrack } from '@/widgets/RacingTrack';

export default function GaragePage(): React.ReactNode {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <GarageControls />
        <RacingTrack />
      </main>
    </>
  );
}

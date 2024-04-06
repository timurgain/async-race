import React from 'react';
import { PageLayout } from '@/widgets/PageLayout';
import styles from './GaragePage.module.scss';

export default function GaragePage(): React.ReactNode {
  return (
    <PageLayout>
      <div className={styles.garage}>Garage</div>
    </PageLayout>
  );
}

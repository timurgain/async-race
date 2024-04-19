import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import GaragePage from '../pages/GaragePage';
import WinnersPage from '../pages/WinnersPage';
import routes from './routes';
import { ErrorBoundary } from '@/widgets/ErrorBoundary';
import { Fallback } from '@/shared/ui/Fallback/Fallback';

export default function App(): React.ReactNode {
  // TODO:
  // + errorBoundary
  // + 404 page
  // + car animation
  // + basic fallback component
  // + car controls grid
  // + alone car drive before server response
  // - tag strings in rtk query
  // - header__shevrons make higher
  // - Modal if there is no connction to the server
  // - Jest tests

  return (
    <ErrorBoundary fallback={(error) => <Fallback text={error?.message || 'Undefined error'} />}>
      <Suspense fallback={<Fallback text='Loading...' />}>
        <Routes>
          <Route path={routes.garage} element={<GaragePage />} />
          <Route path={routes.winners} element={<WinnersPage />} />
          <Route path="*" element={<Fallback text='404 | This page could not be found' />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

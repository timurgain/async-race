import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import GaragePage from '../pages/GaragePage';
import WinnersPage from '../pages/WinnersPage';
import routes from './routes';
import { ErrorBoundary } from '@/widgets/ErrorBoundary';

export default function App(): React.ReactNode {
  // TODO:
  // + errorBoundary
  // + 404 page
  // - car animation
  // - Modal if there is no connction to the server
  // - Jest tests

  return (
    <ErrorBoundary
      fallback={(error) => (
        <p style={{ color: 'yellow', fontSize: '36px', margin: 'auto' }}>
          There is an error: {error?.message}
        </p>
      )}
    >
      <Suspense fallback={<div>Loading...</div>}>

        <Routes>
          <Route path={routes.garage} element={<GaragePage />} />
          <Route path={routes.winners} element={<WinnersPage />} />
          <Route
            path="*"
            element={<div style={{ color: 'yellow', fontSize: '36px', margin: 'auto' }}>404</div>}
          />
        </Routes>
        
      </Suspense>
    </ErrorBoundary>
  );
}

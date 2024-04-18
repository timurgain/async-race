import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import GaragePage from '../pages/GaragePage';
import WinnersPage from '../pages/WinnersPage';
import routes from './routes';

export default function App(): React.ReactNode {
  return (
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
  );
}

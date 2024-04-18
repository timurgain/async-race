import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import GaragePage from '../pages/GaragePage';
import WinnersPage from '../pages/WinnersPage';
import routes from './routes';

export default function App(): React.ReactNode {

  // TODO:
  // - errorBoundary
  // - 404 page
  // - car animation
  // - Modal if there is no connction to the server
  // - Jest tests

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={routes.garage} element={<GaragePage />} />
        <Route path={routes.winners} element={<WinnersPage />} />
      </Routes>
    </Suspense>
  );
}

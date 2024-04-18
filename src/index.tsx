import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import './app/styles/index.scss';
import Providers from './app/providers/Providers';
import { ErrorBoundary } from './widgets/ErrorBoundary';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <ErrorBoundary
      fallback={(error) => (
        <p style={{ color: 'yellow', fontSize: '36px', margin: 'auto' }}>There is an error: {error?.message}</p>
      )}
    >
      <Providers>
        <App />
      </Providers>
    </ErrorBoundary>
  </React.StrictMode>
);

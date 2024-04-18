import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import './app/styles/index.scss';
import Providers from './app/providers/Providers';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
);

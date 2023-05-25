import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import NavigationProvider from './context/navigation';

import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <NavigationProvider>
      <App />
    </NavigationProvider>
  </React.StrictMode>
);

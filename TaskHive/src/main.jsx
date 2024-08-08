import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { FrappeProvider } from 'frappe-react-sdk';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense>
    <BrowserRouter>
      <FrappeProvider url='http://10.10.0.70/'>
        <App />
      </FrappeProvider>
    </BrowserRouter>
  </Suspense>
);

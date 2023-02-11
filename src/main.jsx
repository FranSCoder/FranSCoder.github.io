import App from './App';
import ScrollToTop from './features/ScrollToTop';
import './index.css';
import React from 'react';
import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense fallback={<div>Loading...</div>}>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </Suspense>
);

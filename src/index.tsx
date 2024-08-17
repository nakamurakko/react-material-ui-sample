import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import { Router } from '@remix-run/router';

import App from './App';
import ButtonSample from './button-sample/button-sample';
import CheckboxSample from './checkbox-sample/checkbox-sample';

const router: Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="button-sample" element={<ButtonSample />} />
      <Route path="checkbox-sample" element={<CheckboxSample />} />
    </Route>
  )
);

const root: ReactDOM.Root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

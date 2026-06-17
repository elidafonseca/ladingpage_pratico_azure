import { createBrowserRouter, redirect } from 'react-router';
import HomePage from './components/HomePage';
import WebSummit from './components/WebSummit';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: HomePage,
  },
  {
    path: '/websummit',
    Component: WebSummit,
  },
  {
    path: '*',
    loader: () => redirect('/'),
  },
]);

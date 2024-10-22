/**
 * This file can be used to define Pages configuration,
 * more info in https://reactrouter.com/en/main/routers/create-browser-router/
 */

import type { RouteObject } from 'react-router-dom';

export type Route = {
  children?: Route[];
  id: string;
  title?: string;
} & RouteObject;

export default [
  {
    id: 'home',
    index: true,
    lazy: async () => ({ Component: (await import('./home')).default }),
    path: '/',
  },
  {
    id: '404',
    lazy: async () => ({ Component: (await import('./404')).default }),
    path: '*',
  },
] satisfies Route[];

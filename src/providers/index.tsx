import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AxiosProvider from '@shared/react/providers/axios';

import env from '@/env';
import pages from '@/pages';

const Providers = () => (
  <AxiosProvider>
    <RouterProvider
      router={createBrowserRouter(pages, {
        basename: env.APP_BASE_PATH.endsWith('/')
          ? env.APP_BASE_PATH.slice(0, -1)
          : env.APP_BASE_PATH,
      })}
    />
  </AxiosProvider>
);

export default Providers;

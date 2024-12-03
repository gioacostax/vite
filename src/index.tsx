import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Providers from '@/providers';

import './styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers />
  </StrictMode>,
);

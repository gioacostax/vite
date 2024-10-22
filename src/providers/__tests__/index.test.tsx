import React, { type PropsWithChildren } from 'react';

import { render, screen } from '@testing-library/react';

import { envMock } from '@shared/vitest/utils';

import Providers from '../index';

///////////////////// MOCKS /////////////////////
vi.mock('react-router-dom', async (requireActual) => ({
  ...(await requireActual<object>()),
  createBrowserRouter: vi.fn(),
  RouterProvider: () => <>RouterProvider Mock</>,
}));
vi.mock('@/pages', () => ({ default: [] }));
vi.mock('@shared/react/providers/services', () => ({
  default: ({ children }: PropsWithChildren) => <>{children}</>,
}));
/////////////////////////////////////////////////

describe('<Providers />', () => {
  test('renders', () => {
    envMock({ APP_BASE_PATH: '/base' });
    render(<Providers />);

    /* Assertions */
    screen.getByText('RouterProvider Mock');
  });

  test('renders with trailing slash', () => {
    envMock({ APP_BASE_PATH: '/base/' });
    render(<Providers />);

    /* Assertions */
    screen.getByText('RouterProvider Mock');
  });
});

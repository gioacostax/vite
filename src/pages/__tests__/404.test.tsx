import React from 'react';

import { render, screen } from '@testing-library/react';

import NotFoundPage from '../404';

describe('<NotFoundPage />', () => {
  test('renders', () => {
    render(<NotFoundPage />);

    /* Assertions */
    screen.getByText('404::PAGE_NOT_FOUND');
  });
});

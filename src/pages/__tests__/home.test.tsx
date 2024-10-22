import React from 'react';

import { render, screen } from '@testing-library/react';

import HomePage from '../home';

///////////////////// MOCKS /////////////////////
vi.mock('@/components/norris', () => ({ default: () => <span>Norris Mock</span> }));
/////////////////////////////////////////////////

describe('<HomePage />', () => {
  test('renders', () => {
    render(<HomePage />);

    /* Assertions */
    screen.getByText('Vite + React');
    screen.getByText('Norris Mock');
  });
});

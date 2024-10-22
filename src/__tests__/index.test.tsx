import React from 'react';

import { act, render, screen } from '@testing-library/react';

///////////////////// MOCKS /////////////////////
vi.mock('@/providers', () => ({ default: () => <>Providers Mock</> }));
/////////////////////////////////////////////////

test('main file', async () => {
  render(<div id="root" />);
  await act(async () => {
    await import('../index');
  });

  /* Assertions */
  screen.getByText('Providers Mock');
});

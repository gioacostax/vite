import React from 'react';

import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { useAxiosMutationMock } from '@shared/react/providers/axios/__tests__/test.utils';
import { alertMock } from '@shared/vitest/utils/dom.utils';

import { GET_NORRIS_FACT, GET_NORRIS_FACT_RESPONSE_MOCK } from '@/services/get_norrisFact';

import Norris from '../norris';

describe('<Norris />', () => {
  beforeEach(() => {
    useAxiosMutationMock({ preset: GET_NORRIS_FACT });
  });

  test('renders', () => {
    render(<Norris />);

    /* Assertions */
    screen.getByText('Get Norris Fact');
  });

  test('renders and click "Get Norris Fact" (success)', async () => {
    const alert = alertMock();
    useAxiosMutationMock({
      preset: GET_NORRIS_FACT,
      result: {
        mutateAsync: vi.fn().mockResolvedValue({ data: GET_NORRIS_FACT_RESPONSE_MOCK }),
      },
    });
    render(<Norris />);

    /* Actions */
    fireEvent.click(screen.getByText('Get Norris Fact'));

    /* Assertions */
    await waitFor(() => {
      expect(alert).toHaveBeenCalledWith(
        'Chuck Norris is Strong Enough for a Man, But Made For a Woman.',
      );
    });
  });

  test('renders and click "Get Norris Fact" (error)', async () => {
    const alert = alertMock();
    useAxiosMutationMock({
      preset: GET_NORRIS_FACT,
      result: {
        mutateAsync: vi.fn().mockRejectedValue(new Error('custom error')),
      },
    });
    render(<Norris />);

    /* Actions */
    fireEvent.click(screen.getByText('Get Norris Fact'));

    /* Assertions */
    await waitFor(() => {
      expect(alert).toHaveBeenCalledWith('custom error');
    });
  });
});

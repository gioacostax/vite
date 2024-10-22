import { AxiosConfig } from '@shared/react/providers/axios';

import { GET_NORRIS_FACT } from '@/services/get_norrisFact';

describe('services', () => {
  test('GET_NORRIS_FACT', () => {
    expect(GET_NORRIS_FACT).toBeInstanceOf(AxiosConfig);
  });
});

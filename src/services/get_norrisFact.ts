import { AxiosConfig } from '@shared/react/providers/axios';
export { default as GET_NORRIS_FACT_RESPONSE_MOCK } from './__mocks__/get_norrisFact.response.json';

export interface NorrisParams {
  category?: string;
}

export interface NorrisResponse {
  categories: string[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
}

export const GET_NORRIS_FACT = new AxiosConfig<NorrisParams, never, NorrisResponse>({
  key: 'GET_NORRIS_FACT',
  method: 'GET',
  url: 'https://api.chucknorris.io/jokes/random',
});

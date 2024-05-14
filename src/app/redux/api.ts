import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants/env';

export const API_TAGS = {
  CAR: 'Car',
  ENGINE: 'Engine',
  WINNER: 'Winner',
};

// initialize an empty api service that we'll inject endpoints into later as needed
export const backendAPI = createApi({
  reducerPath: 'api',
  tagTypes: [API_TAGS.CAR, API_TAGS.ENGINE, API_TAGS.WINNER],
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: () => ({}),
});

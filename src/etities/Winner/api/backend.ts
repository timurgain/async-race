import { backendAPI } from '@/app/redux/api';
import { Winner, WinnersParams as P, WinnersOrder, WinnersSort } from '../types/types';
import { CarID } from '@/etities/Car';

const WINNERS_URL = 'winners';

export const winnerAPI = backendAPI.injectEndpoints({
  endpoints: (build) => ({
    getWinners: build.query<
      Winner[],
      { page?: number; limit?: number; sort?: WinnersSort; order?: WinnersOrder }
    >({
      query: ({ page, limit, sort, order }) =>
        `${WINNERS_URL}?${P.PAGE}=${page}&${P.LIMIT}=${limit}&${P.SORT}=${sort}&${P.ORDER}=${order}`,
      providesTags: (result) =>
        result ? result.map(({ id }) => ({ type: 'Winner', id })) : ['Winner'],
    }),

    getWinner: build.query<Winner, CarID>({
      query: (id) => `${WINNERS_URL}/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Winner', id }],
    }),

    postWinner: build.mutation<Winner, Winner>({
      query: (winner) => ({
        url: WINNERS_URL,
        method: 'POST',
        body: winner,
      }),
      invalidatesTags: [{ type: 'Winner' }],
    }),

    updateWinner: build.mutation<Winner, { id: CarID; data: Winner }>({
      query: ({ id, data }) => ({
        url: `${WINNERS_URL}/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (_result, _error, { id }) => [{ type: 'Winner', id }],
    }),
  }),
});

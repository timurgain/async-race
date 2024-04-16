import { WinnerRequest, WinnerResponse, winnersQueryParams } from './../types/types';
import { backendAPI } from '@/app/redux/api';
import { CarID } from '@/etities/Car';

const WINNERS_URL = 'winners';

export const winnerAPI = backendAPI.injectEndpoints({
  endpoints: (build) => ({
    getWinners: build.query<
      {data: WinnerResponse[]; totalCount: number},
      Partial<winnersQueryParams>
    >({
      query: (params) => ({
        url: WINNERS_URL,
        params: Object.fromEntries(
          Object.entries(params || {}).filter(([_, value]) => value !== null)
        ),
      }),
      transformResponse: (response: WinnerResponse[], meta) => {
        const totalCount = parseInt(meta?.response?.headers.get('X-Total-Count') || '0', 10);
        return { data: response, totalCount };
      },
      providesTags: (result) =>
        result ? result.data.map(({ id }) => ({ type: 'Winner', id })) : ['Winner'],
    }),

    getWinner: build.query<WinnerResponse, CarID>({
      query: (id) => `${WINNERS_URL}/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Winner', id }],
    }),

    postWinner: build.mutation<WinnerResponse, WinnerRequest>({
      query: (data) => ({
        url: WINNERS_URL,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: [{ type: 'Winner' }],
    }),

    putWinner: build.mutation<WinnerResponse, WinnerRequest>({
      query: (data) => ({
        url: `${WINNERS_URL}/${data.id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (_result, _error, { id }) => [{ type: 'Winner', id }],
    }),
  }),
});

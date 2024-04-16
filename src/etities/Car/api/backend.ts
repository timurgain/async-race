import { CarsQueryParams } from './../types/types';
import { backendAPI } from '@/app/redux/api';
import { CarID, CarRequest, CarResponse } from '../types/types';

const GARAGE_URL = 'garage';

export const carAPI = backendAPI.injectEndpoints({
  endpoints: (build) => ({
    getCars: build.query<{ data: CarResponse[]; totalCount: number }, Partial<CarsQueryParams>>({
      query: (params) => ({
        url: GARAGE_URL,
        params: Object.fromEntries(
          Object.entries(params || {}).filter(([_, value]) => value !== null)
        ),
      }),
      transformResponse: (response: CarResponse[], meta) => {
        const totalCount = parseInt(meta?.response?.headers.get('X-Total-Count') || '0', 10);
        return { data: response, totalCount };
      },
      providesTags: (result) => (result ? result.data.map(({ id }) => ({ type: 'Car', id })) : ['Car']),
    }),

    getCar: build.query<CarResponse, CarID>({
      query: (id) => `${GARAGE_URL}/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Car', id }],
    }),

    postCar: build.mutation<CarResponse, CarRequest>({
      query: (car) => ({
        url: GARAGE_URL,
        method: 'POST',
        body: car,
      }),
      invalidatesTags: [{ type: 'Car' }],
    }),

    updateCar: build.mutation<CarResponse, { id: CarID; data: CarRequest }>({
      query: ({ id, data }) => ({
        url: `${GARAGE_URL}/${id}`,
        method: 'PUT',
        body: data,
      }),
      // invalidatesTags: (_result, _error, { id }) => [{ type: 'Car', id }],
    }),

    deleteCar: build.mutation<void, { id: CarID }>({
      query: ({ id }) => ({
        url: `${GARAGE_URL}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Car' }],
      // invalidatesTags: (_result, _error, { id }) => [{ type: 'Car', id }],
    }),
  }),
});

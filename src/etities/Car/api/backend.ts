import { CarsQueryParams } from './../types/types';
import { backendAPI } from '@/app/redux/api';
import { CarID, CarRequest, CarResponse } from '../types/types';

const GARAGE_URL = 'garage';

export const carAPI = backendAPI.injectEndpoints({
  endpoints: (build) => ({
    getCars: build.query<CarResponse[], Partial<CarsQueryParams>>({
      query: (params) => ({
        url: GARAGE_URL,
        params: Object.fromEntries(
          Object.entries(params || {}).filter(([_, value]) => value !== null)
        ),
      }),
      providesTags: (result) => (result ? result.map(({ id }) => ({ type: 'Car', id })) : ['Car']),
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
      // invalidatesTags: [{ type: 'Car' }],
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
      // invalidatesTags: (_result, _error, { id }) => [{ type: 'Car', id }],
    }),
  }),
});

import { backendAPI } from '@/app/redux/api';
import { CarID, CarRequest, CarResponse } from '../types/types';

export const carAPI = backendAPI.injectEndpoints({
  endpoints: (build) => ({
    getCars: build.query<CarResponse[], void>({
      query: () => 'garage',
      // providesTags: [{ type: 'Car', id: 'LIST' }],
      providesTags: (result) => (result ? result.map(({ id }) => ({ type: 'Car', id })) : ['Car']),
    }),

    getCar: build.query<CarResponse, CarID>({
      query: (id) => `garage/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Car', id }],
    }),

    postCar: build.mutation<CarResponse, CarRequest>({
      query: (car) => ({
        url: 'garage',
        method: 'POST',
        body: car,
      }),
      invalidatesTags: [{ type: 'Car', id: 'LIST' }],
    }),

    updateCar: build.mutation<CarResponse, { id: CarID; data: CarRequest }>({
      query: ({ id, data }) => ({
        url: `garage/${id}`,
        method: 'PUT',
        body: data,
      }),
      // invalidatesTags: [{ type: 'Car', id: 'LIST' }],
      invalidatesTags: (_result, _error, { id }) => [{ type: 'Car', id }],
    }),
  }),
});

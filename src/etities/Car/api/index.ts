import { backendAPI } from '@/app/redux/api';
import { CarRequest, CarResponse } from '../types';

export const carAPI = backendAPI.injectEndpoints({
  endpoints: (build) => ({
    
    getCars: build.query<CarResponse[], void>({
      query: () => 'garage',
      providesTags: [{ type: 'Car', id: 'LIST' }],
    }),
    postCar: build.mutation<CarResponse, CarRequest>({
      query: (car) => ({
        url: 'garage',
        method: 'POST',
        body: car,
      }),
      invalidatesTags: [{ type: 'Car', id: 'LIST' }],
    }),
  }),
});

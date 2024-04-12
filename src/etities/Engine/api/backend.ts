import { backendAPI } from '@/app/redux/api';
import { EngineResponse, EngineStatus } from '../types/types';
import { CarID } from '@/etities/Car';

export const engineAPI = backendAPI.injectEndpoints({
  endpoints: (build) => ({
    
    patchEngine: build.mutation<EngineResponse, { id: CarID; status: EngineStatus }>({
      query: ({ id, status }) => ({
        url: `engine?id=${id}&status=${status}`,
        method: 'PATCH',
      }),
      // invalidatesTags: (_result, _error, { id }) => [{ type: 'Car', id }],
    }),
  }),
});

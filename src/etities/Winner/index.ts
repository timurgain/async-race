export type { Winner } from './types/types';
export { WinnersSort, WinnersOrder } from './types/types';
export { winnerReducer, winnerActions } from './model/slice';
export { winnerAPI } from './api/backend';
export  {selectWinner } from './model/selectors';
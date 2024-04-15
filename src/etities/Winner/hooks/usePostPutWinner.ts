import { useSelector } from 'react-redux';
import { selectWinner } from '../model/selectors';
import { winnerAPI } from '../api/backend';
import { useEffect, useState } from 'react';
import { useDispatch } from '@/app/redux/hooks';
import { winnerActions } from '../model/slice';

export function usePostPutWinner() {
  // 0. Init

  const winners = useSelector(selectWinner.winners) || {};
  const winner = useSelector(selectWinner.currentWinner);
  const isCurrentWinnerPosted = useSelector(selectWinner.isCurrentWinnerPosted);

  const dispatch = useDispatch();
  const [postWinner] = winnerAPI.usePostWinnerMutation();
  const [putWinner] = winnerAPI.usePutWinnerMutation();

  const [isLoading, setIsLoading] = useState(false);

  // 1. Post/Put winner

  useEffect(() => {
    if (!winner || isCurrentWinnerPosted) return;

    if (winner.id in winners) {
      setIsLoading(true);
      putWinner({ id: winner.id, data: { wins: winner.wins, time: winner.time } })
        .unwrap()
        .then(() => dispatch(winnerActions.setIsCurrentWinnerPosted(null)))
        .catch(console.log)
        .finally(() => setIsLoading(false));
    } else {
      setIsLoading(true);
      postWinner({ data: winner })
        .unwrap()
        .then(() => dispatch(winnerActions.setIsCurrentWinnerPosted(null)))
        .catch(console.log)
        .finally(() => setIsLoading(false));
    }
  }, [winner, isCurrentWinnerPosted, dispatch]);

  return { isLoading };
}

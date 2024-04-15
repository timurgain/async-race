import { useSelector } from 'react-redux';
import { selectWinner } from '../model/selectors';
import { winnerAPI } from '../api/backend';
import { useEffect, useState } from 'react';
import { useDispatch } from '@/app/redux/hooks';
import { winnerActions } from '../model/slice';

export function usePostPutWinner() {
  // 0. Init

  const winner = useSelector(selectWinner.currentWinner);
  const isCurrentWinnerPosted = useSelector(selectWinner.isCurrentWinnerPosted);

  const dispatch = useDispatch();

  const { data: wonBeforeData, isFetching: wonBeforeFetching } =
    winnerAPI.useGetWinnerQuery(winner?.id as number, { skip: !winner?.id });
  const [postWinner] = winnerAPI.usePostWinnerMutation();
  const [putWinner] = winnerAPI.usePutWinnerMutation();

  const [isLoading, setIsLoading] = useState(false);

  // 1. Post/Put winner

  useEffect(() => {
    if (!winner || isCurrentWinnerPosted || wonBeforeFetching) return;
    setIsLoading(true);

    if (wonBeforeData?.id) {
      const totalWins = wonBeforeData.wins + 1;
      const bestTime = winner.time < wonBeforeData.time ? winner.time : wonBeforeData.time;
      putWinner({ id: winner.id, wins: totalWins, time: bestTime})
        .unwrap()
        .then(() => dispatch(winnerActions.setIsCurrentWinnerPosted(true)))
        .catch(console.log)
        .finally(() => setIsLoading(false));
    } else {
      postWinner({ ...winner })
        .unwrap()
        .then(() => dispatch(winnerActions.setIsCurrentWinnerPosted(true)))
        .catch(console.log)
        .finally(() => setIsLoading(false));
    }
  }, [winner, isCurrentWinnerPosted, dispatch, wonBeforeData]);

  return { isLoading };
}

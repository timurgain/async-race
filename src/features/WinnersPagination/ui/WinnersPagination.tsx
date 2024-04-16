import { Button, ButtonKits } from '@/shared/ui/Button/Button';
import PlayIcon from '@/shared/assets/icons/play.svg?react';
import styles from './WinnersPagination.module.scss';
import { useDispatch, useSelector } from '@/app/redux/hooks';
import { WinnersParams, selectWinner, winnerAPI, winnerActions } from '@/etities/Winner';

type Props = {};

export function WinnersPagination({}: Props) {
  // 0. Init
  
  const dispatch = useDispatch();
  const params = useSelector(selectWinner.winnersQueryParams);
  const { data } = winnerAPI.useGetWinnersQuery(params);
  const currentPage = params[WinnersParams.PAGE];
  const limit = params[WinnersParams.LIMIT];
  const totalCount = data?.totalCount;

  // 1. Helpers

  function hasNextPage() {
    if (!totalCount || !limit || !currentPage) return false;
    return currentPage * limit < totalCount;
  }

  function hasPrevPage() {
    if (!totalCount || !limit || !currentPage) return false;
    return currentPage > 1;
  }

  // 2. Actions
  function handleNext() {
    if (!hasNextPage()) return;
    dispatch(
      winnerActions.mutateWinnersQueryParams({ [WinnersParams.PAGE]: (currentPage || 0) + 1 })
    );
  }
  function handlePrev() {
    if (!hasPrevPage()) return;
    dispatch(
      winnerActions.mutateWinnersQueryParams({ [WinnersParams.PAGE]: (currentPage || 0) - 1 })
    );
  }

  // 3. Render
  return (
    <article className={styles.pagination}>
      <Button
        kit={ButtonKits.CLEAR}
        className={styles.pagination__prev}
        onClick={handlePrev}
        disabled={!hasPrevPage()}
      >
        <PlayIcon />
      </Button>
      <p className={styles.pagination__page}>PAGE #{currentPage}</p>
      <Button
        kit={ButtonKits.CLEAR}
        className={styles.pagination__next}
        onClick={handleNext}
        disabled={!hasNextPage()}
      >
        <PlayIcon />
      </Button>
    </article>
  );
}

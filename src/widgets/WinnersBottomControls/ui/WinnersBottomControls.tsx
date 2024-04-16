import { WinnersPagination } from '@/features/WinnersPagination';
import styles from './WinnersBottomControls.module.scss';
import { Total } from '@/shared/ui/Total/Total';
import { useSelector } from '@/app/redux/hooks';
import { WinnersParams, selectWinner, winnerAPI } from '@/etities/Winner';

type Props = {}

export function WinnersBottomControls({}: Props) {

  // 0. Init

  const params = useSelector(selectWinner.winnersQueryParams);
  const { data } = winnerAPI.useGetWinnersQuery(params);
  const currentPage = params[WinnersParams.PAGE];
  const limit = params[WinnersParams.LIMIT];
  const totalCount = data?.totalCount;

  // Render
  return (
    <section className={styles.section}>
      <Total entity='Records' total={totalCount || 0} />
      <WinnersPagination />
    </section>
  )
}


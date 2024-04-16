import { Pagination } from '@/features/Pagination';
import styles from './GarageBottomControls.module.scss';
import { Total } from '@/shared/ui/Total/Total';
import { useDispatch, useSelector } from '@/app/redux/hooks';
import { carAPI, carActions, selectCar } from '@/etities/Car';
import { CarsParams } from '@/etities/Car/types/types';

type Props = {};

export function GarageBottomControls({}: Props) {

  // 0. Init
  
  const dispatch = useDispatch();
  const params = useSelector(selectCar.carsQueryParams);
  const { data } = carAPI.useGetCarsQuery(params);
  const currentPage = params[CarsParams.PAGE];
  const limit = params[CarsParams.LIMIT];
  const totalCount = data?.totalCount;

  // 1. Render

  return (
    <section className={styles.section}>
      <Total entity="Cars" total={totalCount || 0} />
      <Pagination
        currentPage={currentPage || 1}
        limit={limit || 1}
        totalCount={totalCount || 1}
        scrollPage={(page: number) =>
          dispatch(carActions.mutateCarsQueryParams({ [CarsParams.PAGE]: page }))
        }
      />
    </section>
  );
}

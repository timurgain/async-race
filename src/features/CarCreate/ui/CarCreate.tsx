import styles from './CarCreate.module.scss';
import clsx from 'clsx';
import { Input, InputKits, InputTypes } from '@/shared/ui/Input/Input';
import { Button, ButtonKits } from '@/shared/ui/Button/Button';
import { useForm } from 'react-hook-form';
import { InputNames } from '../types/types';
import { validationOptions } from '@/shared/utils/validationForm';
import { CarRequest, carAPI } from '@/etities/Car';

type Props = {
  className?: string;
};

export function CarCreate({ className }: Props) {
  // 0. Config

  const [postCar, {isError, isSuccess}] = carAPI.usePostCarMutation();

  const defaultFormValues = {
    [InputNames.NAME]: '',
    [InputNames.COLOR]: '#ffffff',
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<CarRequest>({
    mode: 'onChange',
    criteriaMode: 'all',
    defaultValues: defaultFormValues,
  });

  async function createCar(data: CarRequest) {
    console.log('CarCreate', data);
    await postCar(data).unwrap();
    reset(defaultFormValues);
  }

  // Render

  return (
    <form className={clsx(styles.form, className)} onSubmit={handleSubmit(createCar)}>
      <Input
        kit={InputKits.PRINARY_M}
        placeholder="TYPE CAR BRAND"
        type={InputTypes.TEXT}
        register={register}
        options={validationOptions.TEXT_REQUIRED}
        name={InputNames.NAME}
        validationError={errors[InputNames.NAME]?.message}
      />
      <Input
        kit={InputKits.COLOR_M}
        type={InputTypes.COLOR}
        register={register}
        options={validationOptions.COLOR_REQUIRED}
        name={InputNames.COLOR}
      />
      <Button kit={ButtonKits.PRYMARY_M_PURPLE} type="submit" disabled={!isValid}>
        CREATE
      </Button>
    </form>
  );
}

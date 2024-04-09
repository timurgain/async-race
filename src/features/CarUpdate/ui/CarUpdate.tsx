import styles from './CarUpdate.module.scss';
import clsx from 'clsx';
import { Input, InputKits, InputTypes } from '@/shared/ui/Input/Input';
import { Button, ButtonKits } from '@/shared/ui/Button/Button';
import { useForm } from 'react-hook-form';
import { InputNames, FormData } from '../types/types';
import { validationOptions } from '@/shared/utils/validationForm';

type Props = {
  className?: string;
};

export function CarUpdate({ className }: Props) {
  // 0. Config

  const defaultFormValues = {
    [InputNames.NAME]: '',
    [InputNames.COLOR]: '#ffffff',
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: 'onChange',
    criteriaMode: 'all',
    defaultValues: defaultFormValues,
  });

  function updateCar(data: FormData) {
    console.log('updateCar', data);
    reset(defaultFormValues);
  }

  // Render

  return (
    <form className={clsx(styles.form, className)} onSubmit={handleSubmit(updateCar)}>
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
        UPDATE
      </Button>
    </form>
  );
}

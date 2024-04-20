import styles from './CarCreate.module.scss';
import clsx from 'clsx';
import { Input, InputKits, InputTypes } from '@/shared/ui/Input/Input';
import { Button, ButtonKits } from '@/shared/ui/Button/Button';
import { useForm } from 'react-hook-form';
import { InputNames } from '../types/types';
import { validationOptions } from '@/shared/utils/validationForm';
import { CarRequest, carAPI } from '@/etities/Car';
import { useState } from 'react';
import { Modal } from '@/shared/ui/Modal/Modal';

type Props = {
  className?: string;
};

export function CarCreate({ className }: Props) {
  // 0. Init

  const [postCar, { data: responseData }] = carAPI.usePostCarMutation();
  const [isOpen, setOpen] = useState(false);

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

  // 1. Create

  function createCar(requestData: CarRequest) {
    postCar(requestData)
      .unwrap()
      .then(() => setOpen(true))
      .catch(console.log)
      .finally(() => reset(defaultFormValues));
  }

  // Render

  return (
    <>
      {/* Form */}

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

      {/* Modal notification */}

      <Modal isOpen={isOpen} onOpenChange={setOpen}>
        <article className={styles.created}>
          <h2>NEW CAR CREATED:</h2>
          <p>{responseData?.name?.toUpperCase()}</p>
        </article>
      </Modal>
    </>
  );
}

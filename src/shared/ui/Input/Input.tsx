import clsx from 'clsx';
import styles from './Input.module.scss';
import { Input as AriaInput } from 'react-aria-components';


export enum InputTypes {
  TEXT = 'text',
}

export enum InputKits {
  PRINARY_M = 'primary-m',
}

type Props = {
  kit?: InputKits;
  className?: string;
  type?: InputTypes;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  register?: any;
  options?: Record<string, any>;
};

export function Input({
  kit,
  className,
  type,
  name,
  placeholder,
  disabled,
  register,
  options,
  ...props
}: Props) {
  const rHookFormProps = register && options && name ? register(name, { ...options }) : {};

  return (
    <AriaInput
      className={clsx(
        styles.input,
        styles[`input_kit_${kit}`]
      )}
      type={type}
      placeholder={placeholder ?? ''}
      disabled={disabled}
      {...rHookFormProps}
      {...props}
    />
  );
}

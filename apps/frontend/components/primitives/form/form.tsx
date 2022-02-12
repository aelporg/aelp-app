import React, { ReactElement } from 'react';
import {
  FormProvider,
  UnpackNestedValue,
  useForm,
  UseFormProps,
} from 'react-hook-form';
import './form.module.scss';

export interface FormProps<DataType>
  extends Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  children?: React.ReactNode;
  hfOptions?: UseFormProps;
  onSubmit?: (data: UnpackNestedValue<DataType>) => void;
}

export function HForm<DataType>({
  hfOptions,
  onSubmit = (data: UnpackNestedValue<DataType>) => false,
  children,
  ...rest
}: FormProps<DataType>) {
  const methods = useForm(hfOptions);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} {...rest}>
        {children}
      </form>
    </FormProvider>
  );
}

export default HForm;

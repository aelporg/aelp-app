import React from 'react'
import {
  FormProvider,
  UnpackNestedValue,
  useForm,
  UseFormProps,
  UseFormReturn,
} from 'react-hook-form'
import './form.module.scss'

export interface FormProps<DataType>
  extends Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  children?:
    | React.ReactNode
    | ((methods: UseFormReturn<DataType>) => React.ReactNode)
  hfOptions?: UseFormProps<DataType>
  onSubmit?: (data: UnpackNestedValue<DataType>) => void
}

export function HForm<DataType>({
  hfOptions,
  onSubmit = (data: UnpackNestedValue<DataType>) => false,
  children,
  ...rest
}: FormProps<DataType>) {
  const methods = useForm<DataType>(hfOptions)

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} {...rest}>
        {typeof children === 'function' ? children(methods) : children}
      </form>
    </FormProvider>
  )
}

export default HForm

import './checkbox.module.scss'
import React from 'react'
import * as CheckboxPrim from '@radix-ui/react-checkbox'
import {
  Path,
  useController,
  UseControllerProps,
  useFormContext,
} from 'react-hook-form'
import { CheckIcon } from '@heroicons/react/outline'
import classNames from 'classnames'

export type CheckboxProps = CheckboxPrim.CheckboxProps & {
  invalidText?: string
  invalid?: boolean
}

const Checkbox = React.forwardRef(
  ({
    checked,
    children,
    invalid = false,
    invalidText,
    className,
    ...rest
  }: CheckboxProps) => {
    return (
      <div>
        <div className="flex items-top">
          <CheckboxPrim.Root
            {...rest}
            checked={checked}
            className={classNames(
              'border-2 w-[1.25rem] h-[1.25rem] my-1 rounded overflow-hidden focus:ring-4 transition-shadow ring-accent ring-opacity-25',
              checked && 'bg-accent',
              checked && 'border-accent',
              invalid && 'border-error',
              className,
            )}
          >
            <CheckboxPrim.Indicator>
              <div
                className={classNames(
                  'w-full h-full transition-colors flex justify-center'
                )}
              >
                {checked && <CheckIcon className="text-white" />}
              </div>
            </CheckboxPrim.Indicator>
          </CheckboxPrim.Root>
          <div className="ml-3 font-medium text-[.95rem]">{children}</div>
        </div>
        {invalid && invalidText && (
          <div className="mt-1 text-error text-xs">{invalidText}</div>
        )}
      </div>
    )
  }
)

Checkbox.displayName = 'Checkbox'

export type HFCheckboxProps<K> = Omit<
  CheckboxProps,
  'checked' | 'onCheckedChange' | 'invalid' | 'invalidText' | 'name'
> & {
  rules?: UseControllerProps<K>['rules']
  name: Path<K>
}

export function HFCheckbox<K = any>({
  name,
  rules,
  children,
  ...rest
}: HFCheckboxProps<K>) {
  const {
    control,
    formState: { errors },
  } = useFormContext<K>()

  const {
    field: { onBlur, onChange, ref, value },
  } = useController({ control, name: name as Path<K>, rules })

  return (
    <Checkbox
      ref={ref}
      onBlur={onBlur}
      checked={value as boolean}
      onCheckedChange={onChange}
      invalid={errors[name as string]?.message}
      invalidText={errors[name as string]?.message}
      {...rest}
    >
      {children}
    </Checkbox>
  )
}

export default Checkbox

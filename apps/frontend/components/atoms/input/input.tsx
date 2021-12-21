import classNames from 'classnames';
import React, { LegacyRef } from 'react';
import { Path, useFormContext } from 'react-hook-form';

export interface InputProps<T = string>
  extends React.InputHTMLAttributes<HTMLInputElement> {
  prefixIcon?: React.ReactNode;
  invalid?: boolean;
  invalidText?: string;
}

const Input = React.forwardRef(
  <T extends any>(
    { className, prefixIcon, invalid, invalidText, ...rest }: InputProps<T>,
    ref: LegacyRef<HTMLInputElement>
  ) => {
    return (
      <div className="w-full self-start">
        <div className="relative">
          {prefixIcon && (
            <div className="w-5 h-5 left-2  absolute  -translate-y-1/2 top-1/2 transform">
              {prefixIcon}
            </div>
          )}
          <input
            className={classNames(
              'rounded-md leading-relaxed w-full pr-2 border py-1.5 focus:outline-none focus:ring-2 focus:border-accent ring-accent-lightest',
              prefixIcon ? 'pl-9' : 'pl-2',
              'read-only:bg-gray-100  read-only:focus:ring-0 read-only:focus:border-gray-200 read-only:cursor-not-allowed',
              invalid &&
                'border-error focus:border-error ring-rose-300 ring-2 focus:ring-4',
              className
            )}
            {...rest}
            ref={ref}
          />
        </div>
        {invalid && invalidText && (
          <div className="text-xs text-error mt-2">{invalidText}</div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export function HFInput<T extends any, K = any>({
  name,
  ...rest
}: InputProps<T>) {
  const {
    register,
    formState: { errors },
  } = useFormContext<K>();

  return (
    <Input
      {...register(name as Path<K>)}
      invalidText={errors[name]?.message}
      invalid={errors[name]}
      {...rest}
    />
  );
}

export default Input;

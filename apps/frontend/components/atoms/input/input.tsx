import classNames from 'classnames';
import React, { LegacyRef } from 'react';

export interface InputProps<T = string>
  extends React.InputHTMLAttributes<HTMLInputElement> {
  innerRef?: LegacyRef<HTMLInputElement>;
  prefixIcon?: React.ReactNode;
}

export function Input<T>({
  innerRef,
  className,
  prefixIcon,
  ...rest
}: InputProps<T>) {
  return (
    <div className="relative w-full self-start">
      {prefixIcon && (
        <div className="w-5 h-5 left-2  absolute  -translate-y-1/2 top-1/2 transform">
          {prefixIcon}
        </div>
      )}
      <input
        className={classNames(
          'rounded-lg leading-relaxed w-full pr-2 border py-2 focus:outline-none focus:ring-2 focus:border-accent ring-accent-lightest',
          prefixIcon ? 'pl-9' : 'pl-2',
          className
        )}
        {...rest}
        ref={innerRef}
      />
    </div>
  );
}

export default Input;

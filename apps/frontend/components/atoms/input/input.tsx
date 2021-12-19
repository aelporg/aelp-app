import classNames from 'classnames';
import React, { LegacyRef } from 'react';

export interface InputProps<T = string>
  extends React.InputHTMLAttributes<HTMLInputElement> {
  prefixIcon?: React.ReactNode;
}

const Input = React.forwardRef(
  <T extends any>(
    { className, prefixIcon, ...rest }: InputProps<T>,
    ref: LegacyRef<HTMLInputElement>
  ) => {
    return (
      <div className="relative w-full self-start">
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
            className
          )}
          {...rest}
          ref={ref}
        />
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;


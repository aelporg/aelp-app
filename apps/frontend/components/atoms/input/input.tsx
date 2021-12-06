import classNames from 'classnames';
import React, { LegacyRef } from 'react';

export interface InputProps<T = string>
  extends React.InputHTMLAttributes<HTMLInputElement> {
  innerRef?: LegacyRef<HTMLInputElement>;
}

export function Input<T>({ innerRef, className, ...rest }: InputProps<T>) {
  return (
    <input
      className={classNames(
        'rounded leading-relaxed px-2 py-1 focus:outline-none border-2 focus:ring-2 focus:border-accent ring-accent-lightest',
        className
      )}
      {...rest}
      ref={innerRef}
    />
  );
}

export default Input;

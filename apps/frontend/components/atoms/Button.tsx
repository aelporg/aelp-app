import React from 'react';
import classNames from 'classnames';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export default function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      className={classNames(
        'bg-accent p-3 text-white font-bold rounded-lg transition-colors duration-200 active:bg-green-800 focus:ring-2  ring-green-400 ring-offset-1',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

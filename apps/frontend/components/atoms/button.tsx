import React from 'react';
import classNames from 'classnames';
import { Size } from '../../typings/utils-types';

type ButtonVariant = 'primary' | 'secondary' | 'custom';
type ButtonSize = Size;

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
}

function getButtonClassNamesForVariant(variant: ButtonVariant) {
  switch (variant) {
    case 'primary':
      return 'text-white bg-green-500';
    case 'secondary':
      return 'text-green-500 bg-green-50';
  }
}

function getButtonClassNamesForSize(size: ButtonSize) {
  switch (size) {
    case 'sm':
      return 'py-2 px-2 text-md rounded-md';
    case 'md':
      return 'py-2 px-4 text-lg rounded-lg';
    case 'lg':
      return 'py-3 px-6 text-xl rounded-lg';
    case 'xl':
      return 'py-4 px-8 text-xl rounded-lg';
  }
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  icon,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={classNames(
        'font-bold focus:outline-none  transition-colors duration-200 focus:ring-2 ring-green-400 ring-offset-2',
        getButtonClassNamesForVariant(variant),
        getButtonClassNamesForSize(size),
        className
      )}
      {...rest}
    >
      {icon ? (
        <div className="flex justify-center">
          {icon}
          <span className="ml-3">{children}</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
}

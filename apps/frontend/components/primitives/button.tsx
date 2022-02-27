import React from 'react'
import classNames from 'classnames'
import { Size } from '../../typings/utils-types'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'custom'
type ButtonSize = Size

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  icon?: React.ReactNode
  rightIcon?: React.ReactNode
  loading?: boolean
}

function getButtonClassNamesForVariant(variant: ButtonVariant) {
  switch (variant) {
    case 'primary':
      return 'text-white bg-accent hover:bg-accent-darker active:bg-accent-darkest'
    case 'secondary':
      return 'text-accent bg-accent bg-opacity-10 hover:bg-opacity-20 active:bg-opacity-30 hover:text-accent-darker'
    case 'ghost':
      return 'bg-transparent hover:bg-black hover:bg-opacity-20 ring-black ring-opacity-75 text-gray-600'
  }
}

function getButtonClassNamesForSize(size: ButtonSize) {
  switch (size) {
    case 'sm':
      return 'py-1.5 px-2.5 text-sm rounded-md'
    case 'md':
      return 'py-2 px-4 text-md rounded-lg'
    case 'lg':
      return 'py-3 px-6 text-xl rounded-lg'
    case 'xl':
      return 'py-4 px-8 text-xl rounded-lg'
  }
}

function getIconClassNamesForSize(size: Size) {
  switch (size) {
    case 'sm':
      return 'w-4 h-4'
    case 'md':
      return 'w-4 h-4' // TODO: figure this out
    case 'lg':
      return 'w-6 h-6'
    case 'xl':
      return 'w-8 h-8'
  }
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  icon,
  type = 'button',
  rightIcon,
  disabled,
  loading,
  ...rest
}: ButtonProps) {
  const modifiedChildren = loading ? 'Loading...' : children

  return (
    <button
      type={type}
      disabled={loading || disabled}
      className={classNames(
        'font-bold outline-none  transition-all duration-200 focus:ring-2 ring-accent-darker',
        getButtonClassNamesForVariant(variant),
        getButtonClassNamesForSize(size),
        'disabled:bg-gray-200 disabled:opacity-70 disabled:text-gray-400 disabled:cursor-not-allowed',
        className
      )}
      {...rest}
    >
      {icon || rightIcon ? (
        <div className={classNames('flex justify-center items-center')}>
          {icon && <div className={getIconClassNamesForSize(size)}>{icon}</div>}
          {modifiedChildren && (
            <span className={classNames(icon && 'ml-2', rightIcon && 'mr-2')}>
              {modifiedChildren}
            </span>
          )}
          {rightIcon && (
            <div className={getIconClassNamesForSize(size)}>{icon}</div>
          )}
        </div>
      ) : (
        modifiedChildren
      )}
    </button>
  )
}

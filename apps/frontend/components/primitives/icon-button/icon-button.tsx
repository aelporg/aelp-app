import classNames from 'classnames'
import React from 'react'

interface IconButtonProps {
  icon: React.ReactElement
  onClick?: () => void
  className?: string
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (props: IconButtonProps, ref) => {
    return (
      <button
        ref={ref}
        className={classNames(
          'h-8 w-8 p-2 hover:bg-gray-200 cursor-pointer rounded-full active:bg-gray-300',
          props.className
        )}
        onClick={props.onClick}
      >
        {props.icon}
      </button>
    )
  }
)


IconButton.displayName = "IconButton"

export default IconButton

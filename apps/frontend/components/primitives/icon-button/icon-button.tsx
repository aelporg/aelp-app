import classNames from 'classnames'

interface IconButtonProps {
  icon: React.ReactElement
  onClick?: () => void
  className?: string
}

export default function IconButton(props: IconButtonProps) {
  return (
    <button
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

import classNames from 'classnames'

export default function Center({
  children,
  full = false,
}: {
  children: React.ReactNode
  full?: boolean
}) {
  return (
    <div
      className={classNames(
        `flex justify-center items-center w-full`,
        !full ? 'h-[80vh]' : 'h-screen',
      )}
    >
      {children}
    </div>
  )
}

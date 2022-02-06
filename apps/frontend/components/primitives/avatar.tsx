import classNames from 'classnames'
import Image from 'next/image'
import { useMemo } from 'react'
import { Size } from 'typings/utils-types'

export interface AvatarProps {
  name: string
  image?: string
  size?: Size
}

function getAvatarClassNamesBySize(size: Size) {
  switch (size) {
    case 'xs':
      return 'w-7 h-7'
    case 'sm':
      return 'w-10 h-10'
    case 'md':
      return 'w-16 h-16 text-2xl'
    case 'lg':
      return 'w-20 h-20'
  }
}

export function Avatar({ size = 'sm', name, image }: AvatarProps) {
  const sizeClasses = useMemo(() => getAvatarClassNamesBySize(size), [size])

  // Generate initials from name
  const initials = useMemo(() => {
    if (!name) return 'UN'

    const nameParts = name.split(' ')
    return nameParts.length > 1
      ? `${nameParts[0][0]}${nameParts[1][0]}`
      : nameParts[0][0]
  }, [name])

  return (
    <div className={classNames('bg-white rounded-full ', sizeClasses)}>
      <div
        className={classNames(
          'rounded-full font-bold bg-accent bg-opacity-10 border border-gray-200 flex justify-center items-center text-accent w-full h-full',
        )}
      >
        {image ? (
          <Image
            src={image}
            alt={initials}
            className="rounded-full"
            width="100%"
            height="100%"
          />
        ) : (
          initials
        )}
      </div>
    </div>
  )
}

export default Avatar

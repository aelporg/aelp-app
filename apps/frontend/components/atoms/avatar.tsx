import classNames from 'classnames';
import Image from 'next/image';
import { useMemo } from 'react';
import { Size } from 'typings/utils-types';

export interface AvatarProps {
  intials?: string;
  image?: string;
  size?: Size;
}

function getAvatarClassNamesBySize(size: Size) {
  switch (size) {
    case 'sm':
      return 'w-10 h-10';
    case 'md':
      return 'w-15 h-15';
    case 'lg':
      return 'w-20 h-20';
  }
}

export function Avatar({ size = 'sm', intials, image }: AvatarProps) {
  const sizeClasses = useMemo(() => getAvatarClassNamesBySize(size), [size]);

  return (
    <div
      className={classNames(
        'rounded-full font-bold bg-green-50 flex justify-center items-center text-green-500',
        sizeClasses
      )}
    >
      {image ? (
        <Image
          src={image}
          alt={intials}
          className="rounded-full"
          width="100%"
          height="100%"
        />
      ) : (
        intials
      )}
    </div>
  );
}

export default Avatar;

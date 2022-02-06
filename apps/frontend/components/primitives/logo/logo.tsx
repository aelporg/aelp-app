import { Size } from '../../../typings/utils-types'
import React from 'react'
import classNames from 'classnames'
import Link from 'next/link'

interface LogoProps {
  size?: Size
  href?: string
}

function getLogoClassNamesBySize(size: Size) {
  switch (size) {
    case 'sm':
      return 'text-xl'
    case 'md':
      return 'text-4xl'
    case 'lg':
      return 'text-5xl'
    case 'xl':
      return 'logo-6xl'
  }
}

export function Logo({ size = 'md', href = '/' }: LogoProps) {
  return (
    <div className={classNames('font-bold', getLogoClassNamesBySize(size))}>
      <h1>
        <Link href={href} passHref>
          <span className="cursor-pointer">
            <span className="text-accent">ae</span>lp
          </span>
        </Link>
      </h1>
    </div>
  )
}

export default Logo

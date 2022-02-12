import { Fragment, useCallback, useEffect, useRef, useState } from 'react'
import UserProfileHeaderIcon from '@components/organisms/top-nav/user-profile-header-icon/user-profile-header-icon'
import classNames from 'classnames'
import UserProfileMenu from './user-profile-menu/user-profile-menu'
import { TopNavConsumer, TopNavProvider } from './top-nav.store'

export interface TopNavProps {
  heading?: string | React.ReactNode
  actions?: React.ReactNode
  persistentBorder?: boolean
  sticky?: boolean
}

export function TopNav({
  persistentBorder,
  actions,
  heading,
  sticky = true,
}: TopNavProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const [sticking, setSticking] = useState(false)

  const handleStickChange: IntersectionObserverCallback = useCallback(
    ([event]) => {
      setSticking(event.intersectionRatio < 1)
    },
    [setSticking]
  )

  useEffect(() => {
    if (elementRef.current) {
      const currentRef = elementRef.current
      const observer = new IntersectionObserver(handleStickChange, {
        threshold: [1],
      })

      observer.observe(currentRef)

      return () => {
        observer.unobserve(currentRef)
      }
    }
  }, [elementRef, handleStickChange])

  return (
    <TopNavProvider>
      <div
        ref={elementRef}
        className={classNames(
          'flex justify-between z-10 py-2 pl-8 pr-4 items-center transition-all duration-200',
          sticking && 'border-b bg-white',
          persistentBorder && 'border-b',
          sticky && 'sticky'
        )}
        style={{
          // Sticky detection hack
          top: '-1px',
          paddingTop: 'calc(.5rem + 1px)',
        }}
      >
        <h3 className="text-3xl font-bold">{heading}</h3>
        <div className="flex items-center">
          {actions && (
            <Fragment>
              {actions}
              <div className="w-0.5 rounded-lg ml-4  bg-gray-300 mx-2 h-8"></div>
            </Fragment>
          )}
          <UserProfileHeaderIcon />
        </div>
      </div>
      <UserProfileMenu />
    </TopNavProvider>
  )
}

export default TopNav

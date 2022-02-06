import { Sidebar, SidebarLink } from '@components/organisms/sidebar/sidebar'
import TopNav, { TopNavProps } from '@components/organisms/top-nav/top-nav'
import React, { useMemo } from 'react'
import { useRouter } from 'next/router'
import withAuthBeing from '@modules/auth/components/high-order/withAuthBeing'

export interface LayoutProps {
  children?: React.ReactNode
  sidebarLinks?: SidebarLink[]
  navHeading?: string
  sidebarBaseLink?: string
  sideBarBetweenElement?: React.ReactNode
  topNavActions?: TopNavProps['actions']
}

function _Layout({
  children,
  sidebarLinks,
  navHeading,
  sidebarBaseLink = '',
  topNavActions,
  sideBarBetweenElement,
}: LayoutProps) {
  const router = useRouter()

  const mainHeading = useMemo(
    () =>
      navHeading ||
      sidebarLinks?.find(link => sidebarBaseLink + link.href === router.asPath)?.name,
    [sidebarLinks, sidebarBaseLink, router.asPath, navHeading]
  )

  return (
    <div className="flex h-screen">
      <Sidebar baseLink={sidebarBaseLink} links={sidebarLinks}  betweenElement={sideBarBetweenElement} />
      <div className="flex-grow">
        <TopNav heading={mainHeading} actions={topNavActions} />
        <div className="px-8 pb-4 pt-3 flex flex-col ">
          {/* max-w-screen-2xl mx-auto */}
          {children}
        </div>
      </div>
    </div>
  )
}

export const Layout = withAuthBeing<LayoutProps>(true, _Layout)

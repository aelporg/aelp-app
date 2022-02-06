import {
  NewspaperIcon,
  ClipboardListIcon,
  QuestionMarkCircleIcon,
  ChartBarIcon,
  PuzzleIcon,
  CollectionIcon,
} from '@heroicons/react/outline'
import Sidebar from '@components/organisms/sidebar/sidebar'
import TopNav, { TopNavProps } from '@components/organisms/top-nav/top-nav'
import { useRouter } from 'next/router'
import React, { useMemo } from 'react'
import withAuth from '@modules/auth/components/high-order/withAuth'

const DashboardLinks = [
  {
    name: 'Feed',
    icon: NewspaperIcon,
    href: '/app/feed',
  },
  {
    name: 'Classrooms',
    icon: ClipboardListIcon,
    href: '/app/classrooms',
  },
  {
    name: 'Questions',
    icon: QuestionMarkCircleIcon,
    href: '/app/questions',
  },
  {
    name: 'Leaderboard',
    icon: ChartBarIcon,
    href: '/app/leaderboard',
  },
  {
    name: 'Practice',
    icon: CollectionIcon,
    href: '/app/practice',
  },
  {
    name: 'Competitions',
    icon: PuzzleIcon,
    href: '/app/competitions',
  },
]

export interface AppLayoutProps {
  children?: React.ReactNode
  topNavActions?: TopNavProps['actions']
}

function _AppLayout({ children, topNavActions }: AppLayoutProps) {
  const router = useRouter()

  const heading = useMemo(
    () => DashboardLinks.find(link => link.href === router.pathname)?.name,
    [router.pathname]
  )

  return (
    <div className="flex h-screen">
      <Sidebar links={DashboardLinks} />
      <div className="flex-grow">
        <TopNav heading={heading} actions={topNavActions} />
        <div className="px-8 pb-4 pt-3 flex flex-col max-w-screen-3xl">
          {children}
        </div>
      </div>
    </div>
  )
}

export const AppLayout = withAuth(_AppLayout)

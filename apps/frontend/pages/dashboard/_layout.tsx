import {
  NewspaperIcon,
  ClipboardListIcon,
  QuestionMarkCircleIcon,
  ChartBarIcon,
  PuzzleIcon,
  CollectionIcon,
} from '@heroicons/react/outline';
import Sidebar from '@components/organisms/sidebar/sidebar';
import TopNav, { TopNavProps } from '@components/organisms/top-nav/top-nav';
import { useRouter } from 'next/router';
import React from 'react';

const dashboardLinks = [
  {
    name: 'Feed',
    icon: NewspaperIcon,
    href: '/dashboard/feed',
  },
  {
    name: 'Classrooms',
    icon: ClipboardListIcon,
    href: '/dashboard/classrooms',
  },
  {
    name: 'Questions',
    icon: QuestionMarkCircleIcon,
    href: '/dashboard/questions',
  },
  {
    name: 'Leaderboard',
    icon: ChartBarIcon,
    href: '/dashboard/leaderboard',
  },
  {
    name: 'Practice',
    icon: CollectionIcon,
    href: '/dashboard/practice',
  },
  {
    name: 'Competitions',
    icon: PuzzleIcon,
    href: '/dashboard/competitions',
  },
];

export interface DashboardLayoutProps {
  children?: React.ReactNode;
  renderTopNavActions?: TopNavProps['renderActions'];
}

export function DashboardLayout({
  children,
  renderTopNavActions,
}: DashboardLayoutProps) {
  const router = useRouter();

  return (
    <div className="flex h-screen">
      <Sidebar links={dashboardLinks} />
      <div className="flex-grow relative">
        <TopNav
          heading={
            dashboardLinks.find(link => link.href === router.pathname)?.name
          }
          renderActions={renderTopNavActions}
        />
        <div className="px-8 pb-4 pt-1 flex flex-col max-w-screen-3xl">
          {children}
        </div>
      </div>
    </div>
  );
}

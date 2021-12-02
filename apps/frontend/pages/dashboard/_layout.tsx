import {
  NewspaperIcon,
  ClipboardListIcon,
  QuestionMarkCircleIcon,
  ChartBarIcon,
  PuzzleIcon,
  CollectionIcon,
} from '@heroicons/react/outline';
import Sidebar from '@components/organisms/sidebar/sidebar';
import DashboardTopNav from '@components/organisms/dashboard-top-nav/dashboard-top-nav';
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

export function DashboardLayout({
  children,
}: React.PropsWithChildren<Record<string, any>>) {
  const router = useRouter();

  return (
    <div className="flex h-screen w-screen">
      <Sidebar links={dashboardLinks} />
      <div className="flex-grow p-6">
        <DashboardTopNav
          heading={
            dashboardLinks.find(link => link.href === router.pathname)?.name
          }
        />
        {children}
      </div>
    </div>
  );
}

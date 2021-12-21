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
import withAuth from '@modules/auth/components/high-order/withAuth';

const dashboardLinks = [
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
];

export interface AppLayoutProps {
  children?: React.ReactNode;
  renderTopNavActions?: TopNavProps['renderActions'];
}

function _AppLayout({ children, renderTopNavActions }: AppLayoutProps) {
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

export const AppLayout = withAuth(_AppLayout);

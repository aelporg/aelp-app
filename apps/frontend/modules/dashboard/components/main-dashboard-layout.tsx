import {
  NewspaperIcon,
  ClipboardListIcon,
  QuestionMarkCircleIcon,
  ChartBarIcon,
  PuzzleIcon,
  CollectionIcon,
} from '@heroicons/react/outline'
import { Layout, LayoutProps } from './layout'

const DashboardLinks = [
  // {
  //   name: 'Feed',
  //   icon: NewspaperIcon,
  //   href: '/app/feed',
  // },
  {
    name: 'Classrooms',
    icon: ClipboardListIcon,
    href: '/app/classrooms',
  },
  {
    name: 'Discussions',
    icon: QuestionMarkCircleIcon,
    href: '/app/discussions',
  },
  // {
  //   name: 'Leaderboard',
  //   icon: ChartBarIcon,
  //   href: '/app/leaderboard',
  // },
  // {
  //   name: 'Practice',
  //   icon: CollectionIcon,
  //   href: '/app/practice',
  // },
  // {
  //   name: 'Competitions',
  //   icon: PuzzleIcon,
  //   href: '/app/competitions',
  // },
]

export default function MainDashboardLayout(
  props: Omit<LayoutProps, 'links'>
) {
  return <Layout {...props} sidebarLinks={DashboardLinks} />
}

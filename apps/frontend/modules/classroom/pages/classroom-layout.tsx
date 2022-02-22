import { QueryResult, useQuery } from '@apollo/client'
import {
  InboxIcon,
  QuestionMarkCircleIcon,
  ClipboardListIcon,
  CogIcon,
  UsersIcon,
  CollectionIcon,
} from '@heroicons/react/outline'
import { Layout, LayoutProps } from '@modules/dashboard/components/layout'
import Head from 'next/head'
import { useRouter } from 'next/router'
import {
  ClassroomQuery,
  ClassroomQueryVariables,
} from 'typings/graphql/ClassroomQuery'
import SidebarClassroomHeader from '../components/sidebar-classroom-header'
import { CLASSROOM_QUERY } from '../graphql/classroom-query'
import {
  ClassroomContextConsumer,
  ClassroomContextProvider,
} from '../store/ClassroomContext'

const ClassroomLinks = [
  {
    name: 'Announcements',
    icon: InboxIcon,
    href: '/announcements',
  },
  {
    name: 'Questions',
    icon: QuestionMarkCircleIcon,
    href: '/questions',
  },
  {
    name: 'Assessments',
    icon: ClipboardListIcon,
    href: '/assessments',
  },
  {
    name: 'Practice',
    icon: CollectionIcon,
    href: '/practice',
  },
  {
    name: 'Members',
    icon: UsersIcon,
    href: '/members',
  },
  {
    name: 'Settings',
    icon: CogIcon,
    href: '/settings',
  },
]

type ClassroomLayoutProps = Omit<LayoutProps, 'links'>

export default function ClassroomLayout({
  children,
  ...props
}: ClassroomLayoutProps) {
  const router = useRouter()
  const { id } = router.query

  return (
    <ClassroomContextProvider classroomId={id as string}>
      <ClassroomContextConsumer>
        {value => (
          <Head>
            <title>{value?.data?.classroom.name} | Classroom</title>
          </Head>
        )}
      </ClassroomContextConsumer>
      <Layout
        {...props}
        sidebarBaseLink={`/app/classroom/${id}`}
        sidebarLinks={ClassroomLinks}
        sideBarBetweenElement={<SidebarClassroomHeader />}
      >
        {children}
      </Layout>
    </ClassroomContextProvider>
  )
}

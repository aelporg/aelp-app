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
import { useRouter } from 'next/router'
import {
  ClassroomQuery,
  ClassroomQueryVariables,
} from 'typings/graphql/ClassroomQuery'
import SidebarClassroomHeader from '../components/sidebar-classroom-header'
import { CLASSROOM_QUERY } from '../graphql/classroom-query'

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

type ClassroomLayoutProps = Omit<LayoutProps, 'links'> & {
  children?: (
    queryResult: QueryResult<ClassroomQuery, ClassroomQueryVariables>
  ) => React.ReactNode | React.ReactNode
}

export default function ClassroomLayout({
  children,
  ...props
}: ClassroomLayoutProps) {
  const router = useRouter()
  const { id } = router.query
  const queryResult = useQuery<ClassroomQuery, ClassroomQueryVariables>(CLASSROOM_QUERY, {
    variables: { id: id as string },
  })

  return (
    <Layout
      {...props}
      sidebarBaseLink={`/app/classroom/${id}`}
      sidebarLinks={ClassroomLinks}
      sideBarBetweenElement={
        <SidebarClassroomHeader classroom={queryResult.data?.classroom} />
      }
    >
      {typeof children === "function" ? children(queryResult) : children}
    </Layout>
  )
}

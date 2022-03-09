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
import { ClassroomRole } from 'typings/graphql/globalTypes'
import SidebarClassroomHeader from '../components/sidebar-classroom-header'
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
    allowedOnly: [ClassroomRole.OWNER],
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
          <>
            <Head>
              <title>{value?.data?.classroom.name} | Classroom</title>
            </Head>
            <Layout
              {...props}
              sidebarBaseLink={`/app/classroom/${id}`}
              sidebarLinks={ClassroomLinks.filter(
                link =>
                  !link.allowedOnly ||
                  link.allowedOnly?.includes(value?.userClassroomRole)
              )}
              sideBarBetweenElement={<SidebarClassroomHeader />}
            >
              {children}
            </Layout>
          </>
        )}
      </ClassroomContextConsumer>
    </ClassroomContextProvider>
  )
}

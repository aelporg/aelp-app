import ClassroomLayout from './classroom-layout'

import AnnouncementCreateForm from '../components/announcement-create-form'
import { gql, useQuery } from '@apollo/client'
import { Facebook } from 'react-content-loader'
import { useClassroomContext } from '../store/ClassroomContext'
import AnnouncementCard from '../components/announcement-card'
import {
  AnnouncementsQuery,
  AnnouncementsQueryVariables,
} from 'typings/graphql/AnnouncementsQuery'

export const ANNOUNCEMENTS_QUERY = gql`
  query AnnouncementsQuery($classroomId: ID!) {
    classroom(id: $classroomId) {
      id
      announcements {
        id
        content
        createdAt
        user {
          id
          name
        }
      }
    }
  }
`

function AnnouncementViewContent() {
  const { data } = useClassroomContext()
  const classroomId = data?.classroom?.id
  const { loading, data: announcementsData } = useQuery<
    AnnouncementsQuery,
    AnnouncementsQueryVariables
  >(ANNOUNCEMENTS_QUERY, {
    variables: { classroomId },
    fetchPolicy: classroomId ? 'cache-and-network' : 'standby',
  })

  return (
    <div className="flex ">
      <div className="flex-1 max-w-4xl">
        <div className="mb-4">
          <AnnouncementCreateForm />
        </div>
        {loading && (
          <Facebook
            className="p-5 bg-white border rounded-lg"
            backgroundColor={'#e1e1e1'}
            foregroundColor={'#f1f1f1'}
            interval={0}
            speed={2}
          />
        )}
        {announcementsData?.classroom?.announcements.map(announcement => (
          <AnnouncementCard key={announcement.id} announcement={announcement} />
        ))}
      </div>
      <div className="w-96"></div>
    </div>
  )
}

export default function AnnouncementsView() {
  return (
    <ClassroomLayout>
      <AnnouncementViewContent />
    </ClassroomLayout>
  )
}

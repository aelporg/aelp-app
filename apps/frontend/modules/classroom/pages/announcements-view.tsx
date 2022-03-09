import ClassroomLayout from './classroom-layout'

import AnnouncementCreateForm from '../components/announcement-create-form'
import { gql } from '@apollo/client'
import { useClassroomContext } from '../store/ClassroomContext'
import Announcement from '../components/announcement.component'
import {
  AnnouncementsQuery,
  AnnouncementsQueryVariables,
} from 'typings/graphql/AnnouncementsQuery'
import { ClassroomRole } from 'typings/graphql/globalTypes'
import Query from '@components/templates/Query'
import NoResultMessage from '@components/templates/NoResultMessage'

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
  const { userClassroomRole } = useClassroomContext()

  return (
    <div className="flex">
      <Query<AnnouncementsQuery, AnnouncementsQueryVariables>
        query={ANNOUNCEMENTS_QUERY}
        variables={{ classroomId }}
        disabled={!classroomId}
      >
        {data => {
          const announcements = data?.classroom?.announcements || []
          const canPostAnnouncement = [
            ClassroomRole.INSTRUCTOR,
            ClassroomRole.OWNER,
          ].includes(userClassroomRole)

          return (
            <div className="flex-1 max-w-4xl">
              {canPostAnnouncement && <AnnouncementCreateForm />}

              {announcements.length < 1 && (
                <div className="min-h-[70vh] flex items-center justify-center">
                  <NoResultMessage title="There are no announcements yet.">
                    {canPostAnnouncement
                      ? 'You can post an announcement by clicking the text field above.'
                      : 'Please wait for an announcement to be posted.'}
                  </NoResultMessage>
                </div>
              )}

              {announcements.map(announcement => (
                <Announcement
                  key={announcement.id}
                  announcement={announcement}
                />
              ))}
            </div>
          )
        }}
      </Query>
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

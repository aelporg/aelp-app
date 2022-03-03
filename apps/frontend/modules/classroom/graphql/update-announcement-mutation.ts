import { gql } from '@apollo/client'

export const UPDATE_ANNOUNCEMENT_MUTATION = gql`
  mutation UpdateAnnoucementMutation(
    $id: ID!
    $data: ClassroomAnnouncementUpdateInput!
  ) {
    updateAnnouncement(id: $id, data: $data) {
      id
      content
    }
  }
`

import { gql } from "@apollo/client";

export const CREATE_ANNOUNCEMENT_MUTATION = gql`
  mutation CreateAnnouncementMutation($data: ClassroomAnnoucementCreateInput!) {
    createAnnouncement(data: $data) {
      id
      user {
        id
        name
      }
      content
      attachments {
        id
        file
      }
    }
  }
`

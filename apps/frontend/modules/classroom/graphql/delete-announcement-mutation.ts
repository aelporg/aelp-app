import { gql } from "@apollo/client";

export const DELETE_ANNOUNCEMENT_MUTATION = gql`
  mutation DeleteAnnoucementMutation($id: ID!) {
    deleteAnnouncement(announcementId: $id)
  }
`

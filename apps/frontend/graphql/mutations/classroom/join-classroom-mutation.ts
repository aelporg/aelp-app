import { gql } from '@apollo/client'

export const JOIN_CLASSROOM_MUTATION = gql`
  mutation JoinClassRoomMutation($inviteCode: String!) {
    joinClassroom(inviteCode: $inviteCode) {
      name
      subject
      section
      createdAt
      updatedAt
    }
  }
`

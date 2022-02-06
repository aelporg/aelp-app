import { gql } from '@apollo/client'

export const JOIN_CLASSROOM_MUTATION = gql`
  mutation JoinClassRoomMutation($data: JoinClassroomInput!) {
    joinClassroom(data: $data) {
      name
      subject
      section
      createdAt
      updatedAt
    }
  }
`

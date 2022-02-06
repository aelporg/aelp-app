import { gql } from '@apollo/client'

export const CREATE_CLASSROOM_MUTATION = gql`
  mutation CreateClassroomMutation($data: CreateClassroomInput!) {
    createClassroom(data: $data) {
      name
      subject
      section
      inviteCode
      createdAt
      updatedAt
    }
  }
`

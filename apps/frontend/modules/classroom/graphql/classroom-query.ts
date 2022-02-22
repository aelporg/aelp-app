import { gql } from '@apollo/client'

const CLASSROOM_MEMBERS_FRAGMENT = gql`
  fragment ClassroomMembers on Classroom {
    members {
      user {
        id
        name
      }
      classroomRole
    }
  }
`

const CLASSROOM_BASIC_INFO_FRAGMENT = gql`
  fragment ClassroomBasicInfo on Classroom {
    name
    subject
    section
    inviteCode
  }
`

const CLASSROOM_DETAILS_FRAGMENT = gql`
  fragment ClassroomDetails on Classroom {
    id
    createdAt
    updatedAt
    ...ClassroomBasicInfo
    ...ClassroomMembers
  }
  ${CLASSROOM_MEMBERS_FRAGMENT}
  ${CLASSROOM_BASIC_INFO_FRAGMENT}
`

export const CLASSROOM_QUERY = gql`
  ${CLASSROOM_DETAILS_FRAGMENT}
  query ClassroomQuery($id: String!) {
    classroom(id: $id) {
      ...ClassroomDetails
    }
  }
`

export const MY_CLASSROOMS_QUERY = gql`
  ${CLASSROOM_DETAILS_FRAGMENT}
  query MyClassroomsQuery {
    classrooms {
      ...ClassroomDetails
      assessments {
        title
      }
    }
  }
`


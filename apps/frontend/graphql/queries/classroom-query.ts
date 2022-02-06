import { gql } from "@apollo/client";

export const MY_CLASSROOMS_QUERY = gql`
  query MyClassroomsQuery {
    classrooms {
      id
      name
      subject
      section
      members {
        user {
          id
          userName
        }
        classroomRole
      }
      assessments {
        title
      }
    }
  }
`

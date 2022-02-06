import { gql } from '@apollo/client'
import { ClassroomCard } from '../components/classroom-card'

export const MY_CLASSROOMS_QUERY = gql`
  query MyClassroomsQuery {
    classrooms {
      ...ClassroomDetails
      assessments {
        title
      }
    }
  }
  ${ClassroomCard.fragments.classroom}
`

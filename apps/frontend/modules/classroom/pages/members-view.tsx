import ClassroomLayout from './classroom-layout'
import { gql } from '@apollo/client'

function MembersView({ members }) {
  return (
    <ClassroomLayout>
      <h1>MembersView</h1>
    </ClassroomLayout>
  )
}

MembersView.fragments = {
  classroom: gql`
    fragment ClassroomMembers on Classroom {
      members {
        user {
          id
          name
        }
        classroomRole
      }
    }
  `,
}

export default MembersView

import { gql } from '@apollo/client'
import { ClassroomBasicInfo } from 'typings/graphql/ClassroomBasicInfo'

function SidebarClassroomHeader({
  classroom,
}: {
  classroom: ClassroomBasicInfo
}) {
  return (
    <div className="p-4 border-2 rounded-lg  bg-transparent">
      <h2 className="text-2xl font-bold">{classroom?.name}</h2>
      <h4>{classroom?.section}</h4>
    </div>
  )
}



export default SidebarClassroomHeader

import { gql } from '@apollo/client'
import { ClassroomBasicInfo } from 'typings/graphql/ClassroomBasicInfo'
import { useClassroomContext } from '../store/ClassroomContext'

function SidebarClassroomHeader() {
  const { data } = useClassroomContext()

  return (
    <div className="p-4 border-2 rounded-lg  bg-transparent">
      <h2 className="text-2xl font-bold long-text">{data?.classroom.name}</h2>
      <h4>{data?.classroom.section}</h4>
    </div>
  )
}

export default SidebarClassroomHeader

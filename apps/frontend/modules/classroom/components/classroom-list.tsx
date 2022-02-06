import { MyClassroomsQuery_classrooms } from 'typings/graphql/MyClassroomsQuery'
import { ClassroomCard } from './classroom-card'

export default function ClassRoomList({
  classrooms,
}: {
  classrooms: MyClassroomsQuery_classrooms[]
}) {
  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-2 2xl:grid-cols-4 md:grid-cols-1 grid-cols-1 gap-8">
      {classrooms.map(classroom => (
        <ClassroomCard key={classroom.id} classroom={classroom} />
      ))}
    </div>
  )
}

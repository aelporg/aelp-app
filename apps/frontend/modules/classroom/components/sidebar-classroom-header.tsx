import { useClassroomContext } from '../store/ClassroomContext'

function SidebarClassroomHeader() {
  const { data } = useClassroomContext()

  return (
    <div className="p-4 border rounded-lg  bg-transparent">
      <h2 className="text-xl font-bold long-text">{data?.classroom.name}</h2>
      <h4 className='text-md'>{data?.classroom.section}</h4>
    </div>
  )
}

export default SidebarClassroomHeader

import Button from '@components/primitives/button'
import { DocumentAddIcon } from '@heroicons/react/outline'
import ClassroomLayout from './classroom-layout'
import { useClassroomContext } from '../store/ClassroomContext'
import Link from 'next/link'

function ClassroomViewContent() {
  return <div className="flex flex-col">Hi</div>
}

function AssessmentsTopNavActions() {
  const classroomId = useClassroomContext().data?.classroom?.id

  return (
    <Link
      href={{
        query: { id: classroomId },
        pathname: '/app/classroom/[id]/assessments/create',
      }}
      passHref
    >
      <Button icon={<DocumentAddIcon />}>Create</Button>
    </Link>
  )
}

export default function AssessmentsView() {
  return (
    <ClassroomLayout topNavActions={<AssessmentsTopNavActions />}>
      <ClassroomViewContent />
    </ClassroomLayout>
  )
}

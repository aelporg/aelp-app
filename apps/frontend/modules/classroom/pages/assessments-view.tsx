import Button from '@components/primitives/button'
import { DocumentAddIcon } from '@heroicons/react/outline'
import ClassroomLayout from './classroom-layout'
import { useClassroomContext } from '../store/ClassroomContext'
import Link from 'next/link'
import { ClassroomRole } from 'typings/graphql/globalTypes'
import AssessmentCard from '../components/assessment-card'
import {
  ClassroomAssessments,
  ClassroomAssessmentsVariables,
} from 'typings/graphql/ClassroomAssessments'
import { ASSESSMENTS_QUERY } from '../graphql/assessments-query'
import Query from '@components/templates/Query'
import NoResultMessage from '@components/templates/NoResultMessage'

function ClassroomViewContent() {
  const { data, userClassroomRole } = useClassroomContext()
  const classroomId = data?.classroom.id
  const canCreateAssessments = userClassroomRole !== ClassroomRole.STUDENT

  return (
    <Query<ClassroomAssessments, ClassroomAssessmentsVariables>
      query={ASSESSMENTS_QUERY}
      variables={{ id: classroomId }}
    >
      {data => {
        return (
          <>
            {data.assessments.length < 1 && (
              <div className="min-h-[70vh] w-full flex items-center self-center justify-center">
                <NoResultMessage title="There are no assessments yet.">
                  {canCreateAssessments
                    ? 'You can post an assessment by clicking the text field above.'
                    : 'Yipee! There is no assessment yet.'}
                </NoResultMessage>
              </div>
            )}
            <div className='flex flex-wrap gap-4'>
              {data.assessments.map(assessment => (
                <AssessmentCard key={assessment.id} assessment={assessment} />
              ))}
            </div>
          </>
        )
      }}
    </Query>
  )
}

function AssessmentsTopNavActions() {
  const { data, userClassroomRole } = useClassroomContext()

  if ([ClassroomRole.STUDENT].includes(userClassroomRole)) return null

  return (
    <Link
      href={{
        query: { id: data?.classroom.id },
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

import Button from '@components/primitives/button'
import Tag from '@components/primitives/tag/tag'
import classNames from 'classnames'
import { HUMAN_DATE_ONLY_FORMAT } from 'lib/utils/date'
import moment from 'moment'
import { ExclamationIcon } from '@heroicons/react/outline'
import { ClassroomAssessments_assessments } from 'typings/graphql/ClassroomAssessments'
import Link from 'next/link'

export function DueDate({ dueDate }: { dueDate: Date }) {
  const dueDateMoment = moment(dueDate)
  const isLate = dueDateMoment < moment()

  return (
    <div
      className={classNames(
        'text-sm font-medium flex items-center',
        isLate && 'text-rose-600'
      )}
    >
      {isLate && <ExclamationIcon className="mr-1 w-4" />}
      Due {dueDateMoment.format(HUMAN_DATE_ONLY_FORMAT)}
    </div>
  )
}

export default function AssessmentCard({
  assessment,
}: {
  assessment: ClassroomAssessments_assessments
}) {
  const shortDescription =
    assessment.description.length > 100
      ? assessment.description.slice(0, 100) + '...'
      : assessment.description

  return (
    <div className="bg-white flex flex-col border rounded-lg p-4 w-full max-w-sm">
      <h3 className="text-2xl font-semibold">{assessment.title}</h3>
      <div className="flex mt-1 flex-col items-start gap-2">
        <Tag>{assessment.assessmentType}</Tag>
        <DueDate dueDate={assessment.endTime} />
      </div>
      <p className="my-3">{shortDescription}</p>
      <Link passHref href={`/app/assessment/${assessment.id}`}>
        <Button className="self-end" variant="ghost">
          View
        </Button>
      </Link>
    </div>
  )
}

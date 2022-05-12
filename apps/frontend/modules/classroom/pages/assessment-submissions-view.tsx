import TopNav from '@components/organisms/top-nav/top-nav'
import { Logo } from '@components/primitives'
import Tag from '@components/primitives/tag/tag'
import Query from '@components/templates/Query'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  ClassroomAssessment,
  ClassroomAssessmentVariables,
} from 'typings/graphql/ClassroomAssessment'
import { ASSESSMENT_QUERY } from '../graphql/assessments-query'

export default function AssessmentSubmissionsView() {
  const router = useRouter()

  return (
    <div>
      <TopNav persistentBorder heading={<Logo href="/app" />} sticky={false} />
      <Query<ClassroomAssessment, ClassroomAssessmentVariables>
        query={ASSESSMENT_QUERY}
        variables={{ id: router.query.assessmentId as string }}
      >
        {data => (
          <div className="max-w-screen-2xl px-10 mx-auto mt-10">
            <Tag>{data.assessment.assessmentType}</Tag>
            <h2 className="text-3xl font-bold my-1">{data.assessment.title}</h2>

            <h2 className="text-2xl font-semibold mt-8">Submissions</h2>
            <div className="mt-2 flex flex-col gap-2 cursor-pointer">
              {data.assessment.answers.map(answer => {
                return (
                  <Link key={answer.user.id} href={`/app/assessment/${data.assessment.id}/submission/${answer.user.id}`} passHref>
                    <div className="border-2 p-4 bg-white rounded-lg">
                      {answer.user.name} has created an answer.
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </Query>
    </div>
  )
}

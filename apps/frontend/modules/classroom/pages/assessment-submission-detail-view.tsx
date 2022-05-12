import TopNav from '@components/organisms/top-nav/top-nav'
import { Logo } from '@components/primitives'
import Tag from '@components/primitives/tag/tag'
import Query from '@components/templates/Query'
import { useRouter } from 'next/router'
import {
  ClassroomAssessment,
  ClassroomAssessmentVariables,
} from 'typings/graphql/ClassroomAssessment'
import QuestionCard from '../components/question-card'
import { ASSESSMENT_QUERY } from '../graphql/assessments-query'

export default function AssessmentSubmisionDetailView() {
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

            <h2 className="text-2xl font-semibold mt-8">Questions</h2>
            <div className="mt-2 flex gap-2">
              {data.assessment.questions.map(question => (
                <pre key={question.id}>
                  {JSON.stringify(question, null, 2)}
                  {JSON.stringify(data.assessment.answers.find(e => e.user.id === (router.query.userId as string)), null, 2)}
                </pre>
              ))}
            </div>
          </div>
        )}
      </Query>
    </div>
  )
}

import TopNav from '@components/organisms/top-nav/top-nav'
import { Logo } from '@components/primitives'
import Tag from '@components/primitives/tag/tag'
import Query from '@components/templates/Query'
import { useRouter } from 'next/router'
import {
  ClassroomAssessment,
  ClassroomAssessmentVariables,
} from 'typings/graphql/ClassroomAssessment'
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
        {data => {
          const assessmentUserResult = data.assessment.answers.find(
            e => e.user.id === router.query.userId
          )

          return (
            <div className="max-w-screen-2xl px-10 mx-auto mt-10">
              <Tag>{data.assessment.assessmentType}</Tag>
              <h2 className="text-3xl font-bold my-1">
                {data.assessment.title}
              </h2>
              Submission by <b>{assessmentUserResult.user.name}</b>
              <h2 className="text-2xl font-semibold mt-8">Questions</h2>
              <div className="mt-2 flex gap-2">
                {data.assessment.questions.map(question => {
                  const answer = data.assessment.answers.find(
                    e =>
                      e.user.id === router.query.userId &&
                      e.questionsSubmissions.find(
                        e => e.questionId === question.id
                      )
                  ).questionsSubmissions[0]
                  const {
                    points,
                    programmingQuestionAnswer: { evaluationResults },
                  } = answer

                  return (
                    <div key={question.id}>
                      <div className="p-4 bg-white border-2 mt-2 min-w-[256px] w-full rounded-lg">
                        <h2 className="text-2xl font-bold">
                          {question.programmingQuestion.title}
                        </h2>
                        <p>Status: {points === 0 ? 'FAILED' : 'PASSED'}</p>
                        {evaluationResults.map(result => (
                          <div key={result.id}></div>
                        ))}
                        <pre>{JSON.stringify(evaluationResults, null, 2)}</pre>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        }}
      </Query>
    </div>
  )
}

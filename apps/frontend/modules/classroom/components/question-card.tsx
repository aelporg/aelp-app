import { useMutation } from '@apollo/client'
import Button from '@components/primitives/button'
import HForm from '@components/primitives/form/form'
import {
  HFRadioGroup,
  HFRadioGroupOption,
} from '@components/radio-group/radio-group'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import {
  AssessmentQuestions_questions,
  AssessmentQuestions_questions_multipleChoiceQuestion,
} from 'typings/graphql/AssessmentQuestions'
import {
  CreateEnvironment,
  CreateEnvironmentVariables,
} from 'typings/graphql/CreateEnvironment'
import { QuestionType } from 'typings/graphql/globalTypes'
import { CREATE_ENVIRNOMENT_MUTATION } from '../graphql/solve-questions-mutations'

function MCQCard({
  mcq,
}: {
  mcq: AssessmentQuestions_questions_multipleChoiceQuestion
}) {
  return (
    <>
      <HForm>
        <h3 className="font-medium mb-2">{mcq.description}</h3>
        <HFRadioGroup name="test">
          {mcq.choices?.map(choice => (
            <div key={choice.id} className='flex items-center'>
              <HFRadioGroupOption value={choice.id} />
              <span className="text-sm">{choice.choice}</span>
            </div>
          ))}
        </HFRadioGroup>
        <Button type="submit" size="sm" className='mt-3'>
          Save
        </Button>
      </HForm>
    </>
  )
}

function ProgrammingQuestionCard({
  question,
}: {
  question: AssessmentQuestions_questions
}) {
  const [createEnvironment, { error }] = useMutation<
    CreateEnvironment,
    CreateEnvironmentVariables
  >(CREATE_ENVIRNOMENT_MUTATION)
  const router = useRouter()

  const solveQuestion = useCallback(async () => {
    const env = await createEnvironment({
      variables: { questionId: question.id },
    }).catch()

    if (env) {
      router.push(`/app/env/${env.data.createEnvironment.id}`)
    }
  }, [createEnvironment, question.id, router])

  return (
    <>
      <h3 className="text-xl font-medium mb-2">
        {question.programmingQuestion.title}
      </h3>
      {error && <span className="text-error">{error.message}</span>}
      <Button onClick={solveQuestion}>Solve</Button>
    </>
  )
}

export default function QuestionCard({
  question,
}: {
  question: AssessmentQuestions_questions
}) {
  return (
    <div className="bg-white flex flex-col border justify-between rounded-lg p-4 w-full max-w-sm">
      {question.questionType === QuestionType.MULTIPLE_CHOICE ? (
        <MCQCard mcq={question.multipleChoiceQuestion} />
      ) : (
        <ProgrammingQuestionCard question={question} />
      )}
    </div>
  )
}

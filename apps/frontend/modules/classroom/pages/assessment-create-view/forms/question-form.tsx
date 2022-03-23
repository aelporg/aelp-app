import Button from '@components/primitives/button'
import { TrashIcon } from '@heroicons/react/outline'
import { useFormContext, useFieldArray } from 'react-hook-form'
import { CreateAssessmentMutationVariables } from 'typings/graphql/CreateAssessmentMutation'
import { QuestionType } from 'typings/graphql/globalTypes'
import MultipleChoiceQuestionForm from './multiple-choice-question-form'
import ProgrammingQuestionForm from './programming-question-form'

type F = CreateAssessmentMutationVariables

export default function AddQuestionsForm() {
  const { control } = useFormContext<F>()
  const { append, fields, remove } = useFieldArray({
    name: 'data.questions',
    control,
  })

  return (
    <div>
      {fields.map((data, i) => (
        <div key={data.id}>
          {data.questionType === QuestionType.MULTIPLE_CHOICE ? (
            <MultipleChoiceQuestionForm index={i} />
          ) : (
            <ProgrammingQuestionForm index={i} />
          )}
          <Button className='mt-3' icon={<TrashIcon />} variant="danger" onClick={() => remove(i)}>
            Delete Question
          </Button>
          <hr className='my-3' />
        </div>
      ))}
      <div className="flex gap-2 mt-4">
        <Button
          onClick={() => append({ questionType: QuestionType.PROGRAMMING })}
        >
          Add Programing Question
        </Button>
        <Button
          onClick={() => append({ questionType: QuestionType.MULTIPLE_CHOICE })}
        >
          Add MCQ
        </Button>
      </div>
    </div>
  )
}

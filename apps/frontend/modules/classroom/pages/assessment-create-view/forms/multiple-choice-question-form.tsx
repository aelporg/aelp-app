import { HFInput } from '@components/primitives'
import Button from '@components/primitives/button'
import FormGroup from '@components/primitives/form-group/form-group'
import { HFTextArea } from '@components/primitives/textarea/textarea'
import {
  HFRadioGroup,
  HFRadioGroupOption,
} from '@components/radio-group/radio-group'
import { PlusIcon, TrashIcon } from '@heroicons/react/outline'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { CreateAssessmentMutationVariables } from 'typings/graphql/CreateAssessmentMutation'

type F = CreateAssessmentMutationVariables

export default function MultipleChoiceQuestionForm({
  index,
}: {
  index: number
}) {
  const { control } = useFormContext()
  const { append, fields, remove } = useFieldArray({
    name: `data.questions.${index}.multipleChoiceQuestion.choices`,
    control,
  })

  return (
    <div>
      <FormGroup label="Question Description">
        <HFTextArea<F>
          name={`data.questions.${index}.multipleChoiceQuestion.description`}
        />
      </FormGroup>
      <FormGroup label="Question Points">
        <HFInput<F>
          type="number"
          name={`data.questions.${index}.points`}
        />
      </FormGroup>
      <div className="text-gray-500 mb-2 text-sm">
        Select the correct option
      </div>
      <HFRadioGroup<F>
        name={`data.questions.${index}.multipleChoiceQuestion.correctChoiceIndex`}
      >
        {fields.map((field, i) => {
          return (
            <div key={field.id} className="flex gap-2 items-center mb-2">
              <HFRadioGroupOption value={i} />

              <HFInput<F>
                name={`data.questions.${index}.multipleChoiceQuestion.choices.${i}`}
                placeholder="Write choice here"
              />

              <Button
                size="sm"
                variant="danger"
                onClick={() => remove(i)}
                icon={<TrashIcon />}
              >
                Remove
              </Button>
            </div>
          )
        })}
      </HFRadioGroup>
      <Button
        size="sm"
        onClick={() => {
          append('')
        }}
        icon={<PlusIcon />}
      >
        Add Choice
      </Button>
    </div>
  )
}

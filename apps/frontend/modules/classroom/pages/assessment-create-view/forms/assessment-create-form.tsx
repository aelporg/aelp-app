import { HFInput } from '@components/primitives'
import { HFCheckbox } from '@components/primitives/checkbox/checkbox'
import FormGroup from '@components/primitives/form-group/form-group'
import { HFSelect } from '@components/primitives/select/select.component'
import { HFTextArea } from '@components/primitives/textarea/textarea'
import { useClassroomContext } from '@modules/classroom/store/ClassroomContext'
import { AssessmentType } from '@prisma/client'
import { useFormContext } from 'react-hook-form'
import { CreateAssessmentMutationVariables } from 'typings/graphql/CreateAssessmentMutation'

type F = CreateAssessmentMutationVariables

export default function AssessmentCreateForm() {
  const { watch } = useFormContext<F>()
  const type = watch('data.assessmentType')
  const { data } = useClassroomContext()
  const classroomId = data?.classroom?.id

  return (
    <>
      <HFInput<F> type="hidden" name="data.classroomId" value={classroomId} />
      <FormGroup label="Type">
        <HFSelect<F>
          name="data.assessmentType"
          options={[
            { label: 'Assignment', value: AssessmentType.ASSIGNMENT },
            { label: 'Exam', value: AssessmentType.EXAM },
          ]}
        />
      </FormGroup>
      <FormGroup label="Title">
        <HFInput<F> name="data.title" placeholder="Title" />
      </FormGroup>
      <FormGroup label="Description">
        <HFTextArea<F> name="data.description" placeholder="Description" />
      </FormGroup>
      {type === AssessmentType.EXAM && (
        <FormGroup label="Start Time">
          <HFInput<F> name="data.startTime" type="datetime-local" />
        </FormGroup>
      )}
      <FormGroup label="Deadline">
        <HFInput<F> name="data.endTime" type="datetime-local" />
      </FormGroup>
      <FormGroup label="Total Points">
        <HFInput<F>
          name="data.totalPoints"
          type="number"
          placeholder="Points for Assessment"
        />
      </FormGroup>
      <FormGroup>
        <HFCheckbox<F> name="data.submitAfterEnd">
          Allow students to submit their work after the deadline
        </HFCheckbox>
      </FormGroup>
    </>
  )
}

import { HFInput } from '@components/primitives'
import FormGroup from '@components/primitives/form-group/form-group'
import HForm from '@components/primitives/form/form'
import { CreateAssessmentMutationVariables } from 'typings/graphql/CreateAssessmentMutation'
import ClassroomLayout from './classroom-layout'

export default function AssessmentsCreateView() {
  return (
    <ClassroomLayout navHeading="Create Assessment">
      <HForm<CreateAssessmentMutationVariables>>
        <FormGroup label="Title">
          <HFInput name="data.title" placeholder="Title" />
        </FormGroup>
        <FormGroup label="Description">
          <HFInput name="data.description" placeholder="Description" />
        </FormGroup>
      </HForm>
    </ClassroomLayout>
  )
}

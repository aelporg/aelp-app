import { useMutation } from '@apollo/client'
import { HFInput } from '@components/primitives'
import Button from '@components/primitives/button'
import FormGroup from '@components/primitives/form-group/form-group'
import HForm from '@components/primitives/form/form'
import Modal from '@components/primitives/modal/modal'
import { CREATE_CLASSROOM_MUTATION } from 'graphql/mutations/classroom/create-classroom-mutation'
import { MY_CLASSROOMS_QUERY } from 'graphql/queries/classroom-query'
import { hfCreateClassroomResolver } from '@aelp-app/validators'
import {
  CreateClassroomMutation,
  CreateClassroomMutationVariables,
} from 'typings/graphql/CreateClassroomMutation'

interface CreateClassRoomModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function CreateClassRoomModal(props: CreateClassRoomModalProps) {
  const [createClassroom, { loading, error }] = useMutation<
    CreateClassroomMutation,
    CreateClassroomMutationVariables
  >(CREATE_CLASSROOM_MUTATION, {
    refetchQueries: [MY_CLASSROOMS_QUERY],
  })

  const onSubmit = async (data: CreateClassroomMutationVariables['data']) => {
    try {
      await createClassroom({ variables: { data } })
      props.onClose()
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Modal
      isOpen={props.isOpen}
      onClose={props.onClose}
      title="Create Classroom"
    >
      <HForm<CreateClassroomMutationVariables['data']>
        onSubmit={onSubmit}
        hfOptions={{ resolver: hfCreateClassroomResolver }}
      >
        <div className="flex flex-col">
          <FormGroup label="Classroom Name *">
            <HFInput name="name" placeholder="Classroom Name" />
          </FormGroup>
          <FormGroup label="Subject">
            <HFInput name="subject" placeholder="Subject" />
          </FormGroup>
          <FormGroup label="Section">
            <HFInput name="section" placeholder="Section" />
          </FormGroup>
          {error && <span className="text-error text-sm">{error.message}</span>}
          <Button type="submit" className="mt-2" size="sm" loading={loading}>
            Create
          </Button>
        </div>
      </HForm>
    </Modal>
  )
}

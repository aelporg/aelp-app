import { useMutation } from '@apollo/client'
import { HFInput } from '@components/primitives'
import Button from '@components/primitives/button'
import FormGroup from '@components/primitives/form-group/form-group'
import HForm from '@components/primitives/form/form'
import Modal from '@components/primitives/modal/modal'
import { JOIN_CLASSROOM_MUTATION } from 'graphql/mutations/classroom/join-classroom-mutation'
import { MY_CLASSROOMS_QUERY } from 'graphql/queries/classroom-query'
import {
  JoinClassRoomMutation,
  JoinClassRoomMutationVariables,
} from 'typings/graphql/JoinClassRoomMutation'
import { SimpleModalProps } from 'typings/utils-types'
import { hfJoinClassroomResolver } from '@aelp-app/validators'

export default function JoinClassRoomModal({
  isOpen,
  onClose,
}: SimpleModalProps) {
  const [joinClassroom, { loading, error, reset }] = useMutation<
    JoinClassRoomMutation,
    JoinClassRoomMutationVariables
  >(JOIN_CLASSROOM_MUTATION, {
    refetchQueries: [MY_CLASSROOMS_QUERY],
  })

  const onSubmit = async (data: JoinClassRoomMutationVariables['data']) => {
    try {
      await joinClassroom({ variables: { data } })
      onModalClose()
    } catch (e) {
      console.log(e)
    }
  }

  const onModalClose = () => {
    reset()
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onModalClose} title="Join Classroom">
      <HForm<JoinClassRoomMutationVariables['data']>
        onSubmit={onSubmit}
        hfOptions={{ resolver: hfJoinClassroomResolver, mode: 'all',  }}
      >
        <div className="flex flex-col">
          <FormGroup label="Invite Code *">
            <HFInput name="inviteCode" placeholder="Invite Code" />
          </FormGroup>
          <span className="text-error text-sm">{error?.message}</span>

          <Button type="submit" loading={loading} className="mt-2" size="sm">
            Join
          </Button>
        </div>
      </HForm>
    </Modal>
  )
}

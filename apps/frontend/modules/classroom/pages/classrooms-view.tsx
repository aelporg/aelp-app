import React from 'react'
import { PlusIcon, UserAddIcon } from '@heroicons/react/outline'
import Button from '@components/primitives/button'
import useDisclosure from 'lib/hooks/useDisclosure'
import CreateClassRoomModal from '../components/create-classroom-modal'
import JoinClassRoomModal from '../components/join-classroom-modal'
import ClassRoomList from '../components/classroom-list'
import { useQuery } from '@apollo/client'
import { MyClassroomsQuery } from 'typings/graphql/MyClassroomsQuery'
import MainDashboardLayout from '@modules/dashboard/components/main-dashboard-layout'
import { MY_CLASSROOMS_QUERY } from '../graphql/classroom-query'
import Loader from '@components/primitives/loader'
import Center from '@components/primitives/center'
import NoResultMessage from '@components/templates/NoResultMessage'

interface ClassroomsViewActionsProps {
  onJoinClick: () => void
  onCreateClick: () => void
}

function ClassroomsViewActions({
  onJoinClick,
  onCreateClick,
}: ClassroomsViewActionsProps) {
  return (
    <div className="flex gap-2">
      <Button
        size="md"
        variant="secondary"
        icon={<UserAddIcon />}
        onClick={onJoinClick}
      >
        Join
      </Button>
      <Button size="md" icon={<PlusIcon />} onClick={onCreateClick}>
        Create
      </Button>
    </div>
  )
}

export default function ClassroomsView() {
  const {
    isOpen: isCreateOpen,
    onClose: onCreateClose,
    onOpen: onCreateOpen,
  } = useDisclosure()
  const {
    isOpen: isJoinOpen,
    onClose: onJoinClose,
    onOpen: onJoinOpen,
  } = useDisclosure()

  const { data, loading } = useQuery<MyClassroomsQuery>(MY_CLASSROOMS_QUERY)

  return (
    <MainDashboardLayout
      topNavActions={
        <ClassroomsViewActions
          onCreateClick={onCreateOpen}
          onJoinClick={onJoinOpen}
        />
      }
    >
      <CreateClassRoomModal isOpen={isCreateOpen} onClose={onCreateClose} />
      <JoinClassRoomModal isOpen={isJoinOpen} onClose={onJoinClose} />
      {loading && (
        <Center>
          <Loader />
        </Center>
      )}
      {data && data.classrooms && data.classrooms.length < 1 && (
        <Center>
          <NoResultMessage title="Oh, it's lonely here.">
            You are not a part of any classroom, join or create classroom to get
            started.
          </NoResultMessage>
        </Center>
      )}
      {data && <ClassRoomList classrooms={data.classrooms} />}
    </MainDashboardLayout>
  )
}

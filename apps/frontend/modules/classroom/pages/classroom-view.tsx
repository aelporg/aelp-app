import React from 'react'
import { PlusIcon, UserAddIcon } from '@heroicons/react/outline'
import Button from '@components/primitives/button'
import { AppLayout } from '@modules/dashboard/components/main-dashboard-layout'
import useDisclosure from 'lib/hooks/useDisclosure'
import CreateClassRoomModal from '../components/create-classroom-modal'
import JoinClassRoomModal from '../components/join-classroom-modal'
import ClassRoomList from '../components/classroom-list'
import { useQuery } from '@apollo/client'
import { MY_CLASSROOMS_QUERY } from 'graphql/queries/classroom-query'
import { MyClassroomsQuery } from 'typings/graphql/MyClassroomsQuery'

interface ClassroomViewActionsProps {
  onJoinClick: () => void
  onCreateClick: () => void
}

function ClassroomViewActions({
  onJoinClick,
  onCreateClick,
}: ClassroomViewActionsProps) {
  return (
    <div className="flex gap-3">
      <Button
        size="sm"
        variant="secondary"
        icon={<UserAddIcon />}
        onClick={onJoinClick}
      >
        Join
      </Button>
      <Button size="sm" icon={<PlusIcon />} onClick={onCreateClick}>
        Create
      </Button>
    </div>
  )
}

export default function ClassRoomView() {
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
    <AppLayout
      topNavActions={
        <ClassroomViewActions
          onCreateClick={onCreateOpen}
          onJoinClick={onJoinOpen}
        />
      }
    >
      <CreateClassRoomModal isOpen={isCreateOpen} onClose={onCreateClose} />
      <JoinClassRoomModal isOpen={isJoinOpen} onClose={onJoinClose} />
      {data && <ClassRoomList classrooms={data.classrooms} />}
    </AppLayout>
  )
}

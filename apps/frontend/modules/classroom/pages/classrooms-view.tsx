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
import { MY_CLASSROOMS_QUERY } from '../graphql/my-classrooms-query'

interface ClassroomsViewActionsProps {
  onJoinClick: () => void
  onCreateClick: () => void
}

function ClassroomsViewActions({
  onJoinClick,
  onCreateClick,
}: ClassroomsViewActionsProps) {
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
      {data && <ClassRoomList classrooms={data.classrooms} />}
    </MainDashboardLayout>
  )
}

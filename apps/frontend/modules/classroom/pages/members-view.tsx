import ClassroomLayout from './classroom-layout'
import { gql, useQuery } from '@apollo/client'
import { ClassroomRole } from 'typings/graphql/globalTypes'
import Avatar from '@components/primitives/avatar'
import { MyClassroomsQuery_classrooms_members } from 'typings/graphql/MyClassroomsQuery'
import Button from '@components/primitives/button'
import { UserAddIcon } from '@heroicons/react/outline'

type MemberListItemProps = {
  member: MyClassroomsQuery_classrooms_members
}

function MemberListItem({ member }: MemberListItemProps) {
  return (
    <div className="flex items-center">
      <Avatar name={member.user.name} size="md" />
      <h3 className="text-xl font-semibold text-slate-600 ml-3">
        {member.user.name}
      </h3>
    </div>
  )
}

type MemberListProps = {
  members: MyClassroomsQuery_classrooms_members[]
  title?: string
  className?: string
  filter?: (member: MyClassroomsQuery_classrooms_members) => boolean
}

function MemberList({ members, filter, className, title }: MemberListProps) {
  const membersAfterFilter = members?.filter(filter || Boolean) || []

  const renderMembers = () => {
    if (membersAfterFilter.length < 1) {
      return (
        <span className="text-gray-500">
          There is currently {title?.toLowerCase() || 'members'} in this
          classroom
        </span>
      )
    }

    return membersAfterFilter.map(member => (
      <MemberListItem member={member} key={member.user.id} />
    ))
  }

  return (
    <div className={className}>
      {title && <h2 className="text-2xl font-bold mb-3">{title}</h2>}
      {renderMembers()}
    </div>
  )
}

function MemberViewNavActions() {
  return <Button icon={<UserAddIcon />}>Invite</Button>
}

function MembersView() {
  return (
    <ClassroomLayout topNavActions={<MemberViewNavActions />}>
      {({ data }) => (
        <div className="">
          <MemberList
            title="Teachers"
            filter={member => member.classroomRole !== ClassroomRole.STUDENT}
            members={data?.classroom.members}
          />
          <MemberList
            className="mt-6"
            title="Students"
            filter={member => member.classroomRole === ClassroomRole.STUDENT}
            members={data?.classroom.members}
          />
        </div>
      )}
    </ClassroomLayout>
  )
}

export default MembersView

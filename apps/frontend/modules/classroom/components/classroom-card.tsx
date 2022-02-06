import { gql } from '@apollo/client'
import Avatar from '@components/primitives/avatar'
import { useMeStore } from '@modules/auth/store/me-store'
import classNames from 'classnames'
import Link from 'next/link'
import { useMemo } from 'react'
import { ClassroomRole } from 'typings/graphql/globalTypes'
import { MyClassroomsQuery_classrooms } from 'typings/graphql/MyClassroomsQuery'
import MembersView from '../pages/members-view'
import SidebarClassroomHeader from './sidebar-classroom-header'

interface ClassroomCardProps {
  classroom: MyClassroomsQuery_classrooms
}

function ClassroomCard({ classroom }: ClassroomCardProps) {
  const owner = useMemo(() => {
    return classroom.members.find(m => m.classroomRole === ClassroomRole.OWNER)
      ?.user
  }, [classroom])

  const { me } = useMeStore()
  const isMyClass = owner?.id !== me?.id && owner !== undefined

  return (
    <Link href={`/app/classroom/${classroom.id}`} passHref>
      <div className="flex border hover:shadow-lg border-slate-200 duration-200 transition-all rounded-lg overflow-hidden flex-col cursor-pointer focus:ring-2 ring-red-100 select-none">
        <div className="h-20 flex justify-end items-center bg-accent">
          {isMyClass && (
            <div className="translate-y-1/2 mx-4 transform">
              <Avatar size="md" name={owner.name} />
            </div>
          )}
        </div>

        <div className="px-5 py-2.5 min-h-[10rem]">
          <h4
            title={classroom.name}
            className={classNames(
              'text-2xl font-bold  overflow-ellipsis overflow-hidden whitespace-nowrap',
              isMyClass && 'w-9/12'
            )}
          >
            {classroom.name}
          </h4>
          {isMyClass && (
            <div className="flex text-lg text-gray-600 font-bold items-center ">
              <span className="">{owner.name}</span>
            </div>
          )}
          <h6 className="text-slate-500 text-md">
            {classroom.subject} {classroom.subject && classroom.section && '-'}{' '}
            {classroom.section}
          </h6>

          {/* <h6 className="text-md mt-4 font-bold text-gray-500">
          Assessments Due Soon
          </h6>
          <div className="flex mt-1 justify-between items-start">
          <div className="flex flex-col">
          <h5 className="font-bold">LR(1) Parser</h5>
          <p className="text-xs font-medium text-gray-400">
          Due in 2 Weeks / 24th Nov, 2021
          </p>
          </div>
          <Button variant="secondary" size="sm" className="ml-4">
          View
          </Button>
        </div>
        <div className="flex text-xs items-center cursor-pointer">
        More
        <ChevronDownIcon className="ml-1 w-3 h-3" />
      </div> */}
        </div>
        <div className="border-t p-5 min-h-[3rem]"></div>
      </div>
    </Link>
  )
}

/*

${SidebarClassroomHeader.fragments.classroom}
*/

ClassroomCard.fragments = {
  classroom: gql`
    ${MembersView.fragments.classroom}
    ${SidebarClassroomHeader.fragments.classroom}
    fragment ClassroomDetails on Classroom {
      id
      createdAt
      updatedAt
      ...ClassroomBasicInfo
      ...ClassroomMembers
    }
  `,
}

console.log(ClassroomCard.fragments.classroom)

export { ClassroomCard }

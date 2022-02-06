import Avatar from '@components/primitives/avatar'
import Button from '@components/primitives/button'
import { ChevronDownIcon } from '@heroicons/react/outline'
import { useMemo } from 'react'
import { ClassroomRole } from 'typings/graphql/globalTypes'
import { MyClassroomsQuery_classrooms } from 'typings/graphql/MyClassroomsQuery'

interface ClassroomCardProps {
  classroom: MyClassroomsQuery_classrooms
}

export default function ClassroomCard({ classroom }: ClassroomCardProps) {
  const owner = useMemo(
    () =>
      classroom.members.find(m => m.classroomRole === ClassroomRole.OWNER)
        ?.user,
    [classroom]
  )

  return (
    <div className="flex border rounded-lg overflow-hidden flex-col cursor-pointer focus:ring-2 ring-red-100 select-none">
      <div className="h-20 flex justify-end items-center bg-accent">
        <div className="translate-y-1/2 mx-4 transform">
          <Avatar size="md" name={`${owner.firstName} ${owner.lastName}`} />
        </div>
      </div>

      <div className="px-5 py-2.5">
        <h4 className="text-2xl font-bold">{classroom.name}</h4>
        <div className="flex text-gray-500 font-bold items-center">
          <span className="">{`${owner.firstName} ${owner.lastName}`}</span>
        </div>
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
    </div>
  )
}

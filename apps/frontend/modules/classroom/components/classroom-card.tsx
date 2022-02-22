import { gql } from '@apollo/client'
import Avatar from '@components/primitives/avatar'
import Button from '@components/primitives/button'
import { ClipboardListIcon } from '@heroicons/react/outline'
import { useMeStore } from '@modules/auth/store/me-store'
import classNames from 'classnames'
import Link from 'next/link'
import { useMemo } from 'react'
import { ClassroomRole } from 'typings/graphql/globalTypes'
import { MyClassroomsQuery_classrooms } from 'typings/graphql/MyClassroomsQuery'
interface ClassroomCardProps {
  classroom: MyClassroomsQuery_classrooms
}

function ClassroomCard({ classroom }: ClassroomCardProps) {
  const owner = useMemo(() => {
    return classroom.members.find(m => m.classroomRole === ClassroomRole.OWNER)
      ?.user
  }, [classroom])

  const { me } = useMeStore()
  const isMyClass = owner?.id === me?.id && owner !== undefined

  return (
    <Link href={`/app/classroom/${classroom.id}`} passHref>
      <div className="flex border-2 hover:shadow-lg border-slate-200 duration-200 transition-all rounded-lg overflow-hidden flex-col cursor-pointer focus:ring-2 ring-red-100 select-none">
        <div className="flex justify-between bg-gray-50 border-b-2">
          <div className={classNames('p-4', !isMyClass && 'w-8/12')}>
            <h4
              title={classroom.name}
              className={classNames('text-2xl font-bold long-text')}
            >
              {classroom.name}
            </h4>
            <h6 className="text-slate-500 text-md long-text">
              {classroom.subject}{' '}
              {classroom.subject && classroom.section && '-'}{' '}
              {classroom.section}
            </h6>
          </div>
          {!isMyClass && (
            <div className="translate-y-1/2 mx-4 transform">
              <Avatar size="lg" name={owner.name} />
            </div>
          )}
        </div>

        <div className="px-5 py-2.5 min-h-[10em]">
          {!isMyClass && (
            <div className="flex text-lg text-gray-600 font-bold items-center ">
              <span className="">{owner.name}</span>
            </div>
          )}

          <div className="text-gray-500">You are all caught up!</div>

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
        <div className="border-t-2 p-5 min-h-[3rem]"></div>
      </div>
    </Link>
  )
}

export { ClassroomCard }

import { Popover, Transition } from '@headlessui/react'
import IconButton from '../icon-button/icon-button'
import { DotsVerticalIcon } from '@heroicons/react/outline'
import { DOMAttributes, Fragment } from 'react'

function PopoverMenu({ children }: { children: React.ReactNode }) {
  return (
    <Popover className={'relative z-20 '}>
      <Popover.Button as={Fragment}>
        <IconButton icon={<DotsVerticalIcon />} />
      </Popover.Button>
      <Transition
        enter="transform transition duration-200"
        enterFrom="opacity-0 scale-50"
        enterTo="opacity-100 scale-100"
        leave="transform duration-100 transition ease-in-out"
        leaveFrom="opacity-100 scale-100 "
        leaveTo="opacity-0 scale-95 "
      >
        <Popover.Panel
          className={
            'p-1 absolute drop-shadow-lg bg-white right-3 rounded-lg border'
          }
        >
          {children}
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

function PopoverMenuItem({
  children,
  icon,
  onClick,
}: {
  children: React.ReactNode
  icon?: React.ReactNode
  onClick?: DOMAttributes<HTMLDivElement>['onClick']
}) {
  return (
    <div
      onClick={onClick}
      className="px-2 py-2 items-center cursor-pointer active:bg-gray-200 rounded-md flex hover:bg-gray-100"
    >
      <div className="w-4 mr-2">{icon}</div>
      {children}
    </div>
  )
}

PopoverMenu.Item = PopoverMenuItem

export default PopoverMenu

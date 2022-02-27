import { AnnouncementsQuery_classroom_announcements } from 'typings/graphql/AnnouncementsQuery'
import moment from 'moment'
import Avatar from '@components/primitives/avatar'
import rehypeSanitize from 'rehype-sanitize'
import MarkdownPreview from '@components/molecules/advanced-markdown-preview/advanced-markdown-review'
import PopoverMenu from '@components/primitives/popover-menu/popover-menu'
import { PencilIcon, TrashIcon } from '@heroicons/react/outline'

export default function AnnouncementCard(props: {
  announcement: AnnouncementsQuery_classroom_announcements
}) {
  return (
    <div className="p-4 border-2 mt-4 rounded-lg">
      <div className="flex mb-2 justify-between">
        <div className="flex">
          <Avatar name={props.announcement.user.name} />
          <div className="flex-1 ml-4">
            <div className="flex justify-between flex-col">
              <div className="font-bold">{props.announcement.user.name}</div>
              <div className="text-gray-400 text-sm">
                {moment(props.announcement.createdAt).fromNow()}
              </div>
            </div>
          </div>
        </div>
        <div>
          <PopoverMenu>
            <PopoverMenu.Item icon={<PencilIcon />}>Edit</PopoverMenu.Item>
            <PopoverMenu.Item icon={<TrashIcon className='text-error' />}>Delete</PopoverMenu.Item>
          </PopoverMenu>
        </div>
      </div>

      <MarkdownPreview
        source={props.announcement.content}
      />
    </div>
  )
}
